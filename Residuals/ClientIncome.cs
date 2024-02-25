using CsvHelper.Configuration;

namespace Residuals;

public class ClientIncome
{
    public DateOnly Month;
    public string Processor;
    public string MID;
    public string MerchantDBA;
    public DateOnly OpenedOn;
    public decimal Volume;
    public decimal Transactions;
    public decimal Revenue;
    public decimal Expenses;
    public decimal NetIncome;
    public decimal Split;
    public decimal AgentPay;
}

public class ClientIncomeMap : ClassMap<ClientIncome>
{
    public ClientIncomeMap()
    {
        Map(m => m.Month).Name("Month");
        Map(m => m.Processor).Name("Processor");
        Map(m => m.MID).Name("MID");
        Map(m => m.MerchantDBA).Name("MerchantDBA", "Merchant DBA");
        Map(m => m.OpenedOn).Name("Open Date");
        Map(m => m.Volume).Name("Volume");
        Map(m => m.Transactions).Name("Transactions", "Trans");
        Map(m => m.Revenue).Name("Revenue");
        Map(m => m.Expenses).Name("Expenses", "Expense");
        Map(m => m.NetIncome).Name("NetIncome", "Net Inc");
        Map(m => m.Split).Name("Split");
        Map(m => m.AgentPay).Name("AgentPay", "Agent Pay");
    }
}