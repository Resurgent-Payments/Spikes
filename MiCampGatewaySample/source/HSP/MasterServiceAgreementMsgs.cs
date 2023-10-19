using ReactiveDomain.Messaging;

namespace HSP;

public static class MasterServiceAgreementMsgs
{
    public class CreateMasterServiceAgreement : Command
    {
        public readonly Guid MasterServiceAgreementId;
        public readonly Guid SubscriberId;
        public readonly string Name;

        public CreateMasterServiceAgreement(Guid masterServiceAgreementId, Guid subscriberId, string name)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
            SubscriberId = subscriberId;
            Name = name;
        }
    }

    public class MasterServiceAgreementCreated : Event
    {
        public readonly Guid MasterServiceAgreementId;
        public readonly Guid SubscriberId;
        public readonly string Name;

        public MasterServiceAgreementCreated(Guid masterServiceAgreementId, Guid subscriberId, string name)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
            SubscriberId = subscriberId;
            Name = name;
        }
    }

    public class UsePaymentMethod : Command
    {
        public readonly Guid MasterServiceAgreementId;
        public readonly Guid StoredPaymentTokenId;

        public UsePaymentMethod(Guid masterServiceAgreementId, Guid storedPaymentTokenId)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
            StoredPaymentTokenId = storedPaymentTokenId;
        }
    }

    public class UsingPaymentMethod : Event
    {
        public readonly Guid MasterServiceAgreementId;
        public readonly Guid StoredPaymentTokenId;

        public UsingPaymentMethod(Guid masterServiceAgreementId, Guid storedPaymentTokenId)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
            StoredPaymentTokenId = storedPaymentTokenId;
        }
    }

    public class AddSubscription : Command
    {
        public readonly Guid MasterServiceAgreementId;
        public readonly Guid SubscriptionId;
        public readonly Guid HostedServiceId;
        public readonly Guid HostedServiceLevelId;

        public AddSubscription(Guid masterServiceAgreementId, Guid subscriptionId, Guid hostedServiceId, Guid hostedServiceLevelId)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
            SubscriptionId = subscriptionId;
            HostedServiceId = hostedServiceId;
            HostedServiceLevelId = hostedServiceLevelId;
        }
    }

    public class SubscribedTo : Event
    {
        public readonly Guid MasterServiceAgreementId;
        public readonly Guid SubscriptionId;
        public readonly Guid HostedServiceId;
        public readonly Guid HostedServiceLevelId;

        public SubscribedTo(Guid masterServiceAgreementId, Guid subscriptionId, Guid hostedServiceId, Guid hostedServiceLevelId)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
            SubscriptionId = subscriptionId;
            HostedServiceId = hostedServiceId;
            HostedServiceLevelId = hostedServiceLevelId;
        }
    }

    public class CancelSubscription : Command
    {
        public readonly Guid MasterServiceAgreementId;
        public readonly Guid SubscriptionId;

        public CancelSubscription(Guid masterServiceAgreementId, Guid subscriptionId)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
            SubscriptionId = subscriptionId;
        }
    }

    public class SubscriptionCanceled : Event
    {
        public readonly Guid MasterServiceAgreementId;
        public readonly Guid SubscriptionId;

        public SubscriptionCanceled(Guid masterServiceAgreementId, Guid subscriptionId)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
            SubscriptionId = subscriptionId;
        }
    }

    public class Close : Command
    {
        public readonly Guid MasterServiceAgreementId;

        public Close(Guid masterServiceAgreementId)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
        }
    }

    public class Closed : Event
    {
        public readonly Guid MasterServiceAgreementId;

        public Closed(Guid masterServiceAgreementId)
        {
            MasterServiceAgreementId = masterServiceAgreementId;
        }
    }
}