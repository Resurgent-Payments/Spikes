using EventStore.ClientAPI.Exceptions;
using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging.Bus;
using System.Data.Common;
using System.Runtime.InteropServices;

namespace Residuals;

public class Merchants : ReadModelBase, IHandle<MerchantMsgs.Opened>
{
    private readonly IConfiguredConnection _connection;
    private readonly Dictionary<(string Processor, string MID), Guid> _merchantIds = new();
    private readonly List<ListItem> _listItems = new();
    private uint _count;

    public Guid GetMerchantId(string processor, string mid)
        => _merchantIds.TryGetValue((processor, mid), out var merchantId)
            ? merchantId
            : Guid.Empty;
    public uint Count => _count;
    public IReadOnlyList<ListItem> ListItems => _listItems.AsReadOnly();
    public MerchantDetails GetDetails(Guid merchantId)
    {
        return new MerchantDetails(merchantId, _connection);
    }

    public Merchants(IConfiguredConnection connection) : base(nameof(Merchants), connection)
    {
        _connection = connection;
        EventStream.Subscribe<MerchantMsgs.Opened>(this);

        Start<Merchant>();
    }

    public void Handle(MerchantMsgs.Opened msg)
    {
        _merchantIds.Add((msg.Processor, msg.MID), msg.MerchantId);
        _listItems.Add(new ListItem(msg.MerchantId, msg.Name));
        _count++;
    }

    public record ListItem(Guid MerchantId, string MerchantName);
}