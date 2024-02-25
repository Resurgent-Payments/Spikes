using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging.Bus;

namespace Residuals;

public class MerchantDetails : ReadModelBase,
    IHandle<MerchantMsgs.Opened>,
    IHandle<MerchantMsgs.AgentSplitChanged>,
    IHandle<MerchantMsgs.ResidualReceived>
{
    public string Name { get; set; } = string.Empty;
    public string MID { get; set; } = string.Empty;
    public string Processor { get; set; } = string.Empty;

    public List<SplitRate> SplitRates = [];
    public List<(DateOnly Month, decimal Volume)> Volumes = [];
    public List<(DateOnly Month, uint Transactions)> Transactions = [];
    public List<(DateOnly Month, decimal Revenue)> Revenues = [];
    public List<(DateOnly Month, decimal Expenses)> Expenses = [];
    public List<(DateOnly Month, decimal NetIncome)> NetIncomes = [];
    public List<(DateOnly Month, decimal AgentPay)> AgentPays = [];

    public MerchantDetails(Guid merchantId, IConfiguredConnection connection) : base(nameof(MerchantDetails), connection)
    {
        EventStream.Subscribe<MerchantMsgs.Opened>(this);
        EventStream.Subscribe<MerchantMsgs.AgentSplitChanged>(this);
        EventStream.Subscribe<MerchantMsgs.ResidualReceived>(this);

        using (var reader = connection.GetReader($"{nameof(MerchantDetails)}-reader", Handle))
        {
            reader.Read<Merchant>(merchantId, () => Idle);
            Thread.Sleep(100);
        }
    }

    public void Handle(MerchantMsgs.Opened msg)
    {
        Name = msg.Name;
        MID = msg.MID;
        Processor = msg.Processor;
    }

    public void Handle(MerchantMsgs.AgentSplitChanged msg)
    {
        SplitRates.Add(new SplitRate(msg.Month, msg.AgentSplit));
    }

    public void Handle(MerchantMsgs.ResidualReceived msg)
    {
        var rate = SplitRates.OrderBy(sr => sr.Month)
            .FirstOrDefault(sr => sr.Month >= msg.Month) ?? SplitRates.FirstOrDefault();
        var netIncome = msg.Revenue - msg.Expenses;
        var agentPay = netIncome * rate?.AgentSplit ?? 1;

        Volumes.Add((msg.Month, msg.Volume));
        Transactions.Add((msg.Month, msg.Transactions));
        Revenues.Add((msg.Month, msg.Revenue));
        Expenses.Add((msg.Month, msg.Expenses));
        NetIncomes.Add((msg.Month, msg.Revenue - msg.Expenses));
        AgentPays.Add((msg.Month, agentPay));
    }

    public record SplitRate(DateOnly Month, decimal AgentSplit);
}
