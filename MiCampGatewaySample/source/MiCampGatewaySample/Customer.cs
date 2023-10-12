
// post contract
// https://gateway.mipaymentchoice.com/merchants/{merchantKey}/customers/{customerKey}/contracts"

record Customer(
    string CustomerName,
    string Customerid,
    int? MerchantKey,
    Contact DefaultContact,
    Address ShippingAddress,
    Address BillingAddress,
    ActivationStatus ActivationStatus
);
