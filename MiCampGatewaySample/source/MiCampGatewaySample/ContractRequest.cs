record ContractRequest(
    int MerchantKey,
    int CustomerKey,
    string Token,
    decimal BillAmount,
    DateTime StartDate,
    DateTime EndDate,
    string MerchantContractName,
    string MerchantContractId,
    int MaxFailures,
    int BillingInterval, // need to question what this is.
    int FailureInterval,
    bool EmailMerchant,
    bool EmailCustomer,
    bool EmailMerchantFailure,
    bool EmailCustomerFailure,
    decimal TaxAmount,
    decimal MaxAmount,
    List<ContractCustomField> CustomFields,
    BillingPeriods BillingPeriod,
    ActivationStatus ActivationStatus,
    FailurePeriod FailurePeriod,
    EmailCustomerReceiptOption EmailCustomerReceiptOption
);
