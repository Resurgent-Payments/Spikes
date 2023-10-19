using ReactiveDomain;
using ReactiveDomain.Messaging;

namespace HSP;

public class Subscriber : AggregateRoot
{
    private readonly Dictionary<Guid, string> _paymentTokens = new();

    public Subscriber(Guid subscriberId, string name, ICorrelatedMessage msg) : base(msg)
    {
        RegisterEvents();

        Raise(new SubscriberMsgs.Subscribed(subscriberId, name));
    }

    public Subscriber()
    {
        RegisterEvents();
    }

    private void RegisterEvents()
    {
        Register<SubscriberMsgs.Subscribed>(Apply);
        Register<SubscriberMsgs.PaymentTokenStored>(Apply);
        Register<SubscriberMsgs.PaymentTokenRemoved>(Apply);
    }

    public void StorePaymentToken(Guid storedPaymentTokenId, string cardType, string cardLast4, string token)
    {
        if (_paymentTokens.ContainsKey(storedPaymentTokenId)) { return; }

        Raise(new SubscriberMsgs.PaymentTokenStored(Id, storedPaymentTokenId, cardType, cardLast4, token));
    }

    public void RemovePaymentToken(Guid storedPaymentTokenId)
    {
        if (_paymentTokens.TryGetValue(storedPaymentTokenId, out var token))
        {
            Raise(new SubscriberMsgs.RemoveHostedPaymentToken(Id, storedPaymentTokenId, token));
        }
    }

    public void PaymentTokenRemovalCompleted(Guid storedPaymentTokenId)
    {
        if (_paymentTokens.ContainsKey(storedPaymentTokenId))
        {
            Raise(new SubscriberMsgs.PaymentTokenRemoved(Id, storedPaymentTokenId));
        }
    }



    private void Apply(SubscriberMsgs.Subscribed msg)
    {
        Id = msg.SubscriberId;
    }

    private void Apply(SubscriberMsgs.PaymentTokenStored msg)
    {
        _paymentTokens.Add(msg.StoredPaymentTokenId, msg.Token);
    }

    private void Apply(SubscriberMsgs.PaymentTokenRemoved msg)
    {
        _paymentTokens.Remove(msg.StoredPaymentTokenId);
    }
}
