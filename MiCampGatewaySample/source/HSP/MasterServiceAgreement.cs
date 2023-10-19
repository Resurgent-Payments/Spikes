using ReactiveDomain;
using ReactiveDomain.Messaging;

namespace HSP;

public class MasterServiceAgreement : AggregateRoot
{
    private bool _closed = false;
    private Guid _paymentMethodId = Guid.Empty;
    private HashSet<Guid> _activeSubscriptions = new();


    public MasterServiceAgreement(Guid masterServiceAgreementId, Guid subscriberId, string name, ICorrelatedMessage msg) : base(msg)
    {
        RegisterEvents();

        Raise(new MasterServiceAgreementMsgs.MasterServiceAgreementCreated(masterServiceAgreementId, subscriberId, name));
    }
    public MasterServiceAgreement()
    {
        RegisterEvents();
    }

    private void RegisterEvents()
    {
        Register<MasterServiceAgreementMsgs.MasterServiceAgreementCreated>(Apply);
        Register<MasterServiceAgreementMsgs.UsingPaymentMethod>(Apply);
        Register<MasterServiceAgreementMsgs.SubscribedTo>(Apply);
        Register<MasterServiceAgreementMsgs.SubscriptionCanceled>(Apply);
        Register<MasterServiceAgreementMsgs.Closed>(Apply);
    }

    public void UsePaymentMethod(Guid storedPaymentTokenId)
    {
        if (_paymentMethodId == storedPaymentTokenId) { return; }
        Raise(new MasterServiceAgreementMsgs.UsingPaymentMethod(Id, storedPaymentTokenId));
    }

    public void AddSubscription(Guid subscriptionId, Guid hostedServiceId, Guid hostedServiceLevelId)
    {
        if (_activeSubscriptions.Contains(subscriptionId)) { return; }
        Raise(new MasterServiceAgreementMsgs.SubscribedTo(Id, subscriptionId, hostedServiceId, hostedServiceLevelId));
    }

    public void CancelSubscription(Guid subscriptionId)
    {
        if (_activeSubscriptions.Contains(subscriptionId))
        {
            Raise(new MasterServiceAgreementMsgs.SubscriptionCanceled(Id, subscriptionId));
        }
    }

    public void Close()
    {
        if (_closed) { return; }

        Raise(new MasterServiceAgreementMsgs.Closed(Id));
    }


    private void Apply(MasterServiceAgreementMsgs.MasterServiceAgreementCreated msg)
    {
        Id = msg.MasterServiceAgreementId;
    }

    private void Apply(MasterServiceAgreementMsgs.UsingPaymentMethod msg)
    {
        _paymentMethodId = msg.StoredPaymentTokenId;
    }

    private void Apply(MasterServiceAgreementMsgs.SubscribedTo msg)
    {
        _activeSubscriptions.Add(msg.SubscriptionId);
    }

    private void Apply(MasterServiceAgreementMsgs.SubscriptionCanceled msg)
    {
        _activeSubscriptions.Remove(msg.SubscriptionId);
    }

    private void Apply(MasterServiceAgreementMsgs.Closed _)
    {
        _closed = true;
    }
}
