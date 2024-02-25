using ReactiveDomain.Messaging;

namespace Residuals;

public static partial class MerchantMsgs
{
    public class Opened : Event
    {
        public readonly Guid MerchantId;
        public readonly DateOnly Month;
        public readonly string Name;
        public readonly string MID;
        public readonly string Processor;

        public Opened(Guid merchantId, DateOnly month, string name, string mid, string processor)
        {
            MerchantId = merchantId;
            Month = month;
            Name = name;
            MID = mid;
            Processor = processor;
        }
    }

    public class AgentSplitChanged : Event
    {
        public readonly Guid MerchantId;
        public readonly DateOnly Month;
        public readonly decimal AgentSplit;

        public AgentSplitChanged(Guid merchantId, DateOnly month, decimal agentSplit)
        {
            MerchantId = merchantId;
            Month = month;
            AgentSplit = agentSplit;
        }
    }

    public class ResidualReceived : Event
    {
        public readonly Guid MerchantId;
        public readonly DateOnly Month;
        public readonly decimal Volume;
        public readonly uint Transactions;
        public readonly decimal Revenue;
        public readonly decimal Expenses;

        public ResidualReceived(Guid merchantId, DateOnly month, decimal volume, uint transactions, decimal revenue, decimal expenses)
        {
            MerchantId = merchantId;
            Month = month;
            Volume = volume;
            Transactions = transactions;
            Revenue = revenue;
            Expenses = expenses;
        }
    }
}