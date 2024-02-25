using ReactiveDomain;
using ReactiveDomain.Messaging;
using ReactiveDomain.Util;

namespace Residuals;

public class Merchant : AggregateRoot
{
    private readonly Stack<DateOnly> _processedMonths = new();

    private decimal _agentSplit = 0;

    public Merchant(Guid merchantId, DateOnly month, string name, string mid, string processor, decimal agentSplit, ICorrelatedMessage msg) : base(msg)
    {
        Ensure.NotEmptyGuid(merchantId, nameof(merchantId));
        Ensure.NotNullOrEmpty(name, nameof(name));
        Ensure.NotNullOrEmpty(mid, nameof(mid));
        Ensure.NotNullOrEmpty(processor, nameof(processor));
        RegisterEvents();
        Raise(new MerchantMsgs.Opened(merchantId, month, name, mid, processor));
        Raise(new MerchantMsgs.AgentSplitChanged(merchantId, month, agentSplit));
    }

    public Merchant() : base()
    {
        RegisterEvents();
    }

    private void RegisterEvents()
    {
        Register<MerchantMsgs.Opened>(Apply);
        Register<MerchantMsgs.AgentSplitChanged>(Apply);
        Register<MerchantMsgs.ResidualReceived>(Apply);
    }


    public void Receive(DateOnly month, decimal volume, uint transactions, decimal revenue, decimal expenses, decimal netIncome, decimal agentSplit, decimal agentPay)
    {
        if (_processedMonths.Contains(month)) { return; } // assume we've already processed this.
        Ensure.GreaterThanOrEqualTo(0, volume, nameof(volume));
        Ensure.GreaterThanOrEqualTo(0, revenue, nameof(revenue));
        Ensure.GreaterThanOrEqualTo(0, expenses, nameof(expenses));
        Ensure.GreaterThanOrEqualTo(0, netIncome, nameof(netIncome));
        Ensure.GreaterThanOrEqualTo(0, agentSplit, nameof(agentSplit));
        Ensure.GreaterThanOrEqualTo(0, agentPay, nameof(agentPay));

        if (_agentSplit != agentSplit)
        {
            Raise(new MerchantMsgs.AgentSplitChanged(Id, month, agentSplit));
        }

        var expectedNetIncome = revenue - expenses;
        var expectedAgentPay = expectedNetIncome * _agentSplit;

        if (netIncome != expectedNetIncome) { throw new Exception($"Net income does not balance.  Expected: {expectedNetIncome} Actual: {netIncome}"); }
        if (agentPay != expectedAgentPay) { throw new Exception($"Agent pay does not balance.  Expected: {expectedAgentPay} Actual: {agentPay}"); }

        Raise(new MerchantMsgs.ResidualReceived(Id, month, volume, transactions, revenue, expenses));
    }

    private void Apply(MerchantMsgs.Opened msg)
    {
        Id = msg.MerchantId;
    }

    private void Apply(MerchantMsgs.AgentSplitChanged msg)
    {
        _agentSplit = msg.AgentSplit;
    }

    private void Apply(MerchantMsgs.ResidualReceived msg)
    {
        _processedMonths.Append(msg.Month);
    }
}