using CsvHelper;

using Microsoft.Extensions.Logging;
using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging;
using System.CommandLine;
using System.CommandLine.Invocation;
using System.Globalization;

using Command = System.CommandLine.Command;
using StreamReader = System.IO.StreamReader;

namespace Residuals;

internal class ImportsCommand : Command
{
    public ImportsCommand() : base("import", "Import tools")
    {
        AddCommand(new ImportResidualsCommand());
    }
}

internal class ImportResidualsCommand : Command
{
    static readonly string[] s_DefaultDate = ["-d", "--default-date"];
    static readonly string[] s_FileFlags = ["-if", "--in-file"];

    public ImportResidualsCommand() : base("residuals", "imports residuals")
    {
        AddOption(new Option<DateOnly>(s_DefaultDate, "The default date, if one does not exist for a new merchant."));

        AddOption(new Option<string>(s_FileFlags, "The file to be imported.")
        { IsRequired = true });
    }

    public new class Handler : ICommandHandler
    {
        private static readonly ICorrelatedMessage s_cmd = MessageBuilder.New(() => new ConsoleCommand());
        private readonly ICorrelatedRepository _repository;
        private readonly ILogger _log;
        private readonly Merchants _merchants;

        public DateOnly? DefaultDate { get; set; }
        public string? InFile { get; set; }

        public Handler(IConfiguredConnection connection, ILoggerFactory loggerFactory, Merchants merchants)
        {
            _repository = connection.GetCorrelatedRepository();
            _log = loggerFactory.CreateLogger<Handler>();
            _merchants = merchants;
        }

        public int Invoke(InvocationContext context) => InvokeAsync(context).GetAwaiter().GetResult();

        public Task<int> InvokeAsync(InvocationContext context)
        {
            using (var reader = new StreamReader(InFile!))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Context.RegisterClassMap<ClientIncomeMap>();
                var records = csv.GetRecords<ClientIncome>();

                foreach (var record in records)
                {
                    var merchantId = _merchants.GetMerchantId(record.Processor, record.MID);
                    Merchant m;

                    if (merchantId == Guid.Empty)
                    {
                        merchantId = Guid.NewGuid();
                        m = new Merchant(merchantId, record.OpenedOn, record.MerchantDBA, record.MID, record.Processor, record.Split / 100, s_cmd);
                        _repository.Save(m);
                    }

                    m = _repository.GetById<Merchant>(merchantId, s_cmd);
                    m.Receive(record.Month, record.Volume, Convert.ToUInt32(record.Transactions), record.Revenue, record.Expenses, record.NetIncome, record.Split / 100, record.AgentPay);
                    _repository.Save(m);
                }

                return Task.FromResult(0);
            }
        }

    }

    internal class ConsoleCommand : ReactiveDomain.Messaging.Command { }
}