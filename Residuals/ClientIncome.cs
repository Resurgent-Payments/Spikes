namespace Residuals;

public record ClientIncome(Guid RecordId, DateOnly Month, string Processor, string MID, string MerchantDBA, DateOnly OpenedOn, decimal Volume, uint Transactions, decimal Revenue, decimal Expenses, decimal NetIncome, decimal Split, decimal AgentPay);