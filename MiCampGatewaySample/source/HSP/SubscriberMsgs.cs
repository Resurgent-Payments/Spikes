using ReactiveDomain.Messaging;

namespace HSP;

public static class SubscriberMsgs
{
    public class Subscribe : Command
    {
        public readonly Guid SubscriberId;
        public readonly string Name;

        public Subscribe(Guid subscriberId, string name)
        {
            SubscriberId = subscriberId;
            Name = name;
        }
    }

    public class Subscribed : Event
    {
        public readonly Guid SubscriberId;
        public readonly string Name;

        public Subscribed(Guid subscriberId, string name)
        {
            SubscriberId = subscriberId;
            Name = name;
        }
    }

    public class StorePaymentToken : Command
    {
        public readonly Guid SubscriberId;
        public readonly Guid StoredPaymentTokenId;
        public readonly string CardType;
        public readonly string CardLast4;
        public readonly string Token;

        public StorePaymentToken(Guid subscriberId, Guid storedPaymentTokenId, string cardType, string cardLast4, string token)
        {
            SubscriberId = subscriberId;
            StoredPaymentTokenId = storedPaymentTokenId;
            CardType = cardType;
            CardLast4 = cardLast4;
            Token = token;
        }
    }

    public class PaymentTokenStored : Event
    {
        public readonly Guid SubscriberId;
        public readonly Guid StoredPaymentTokenId;
        public readonly string CardType;
        public readonly string CardLast4;
        public readonly string Token;

        public PaymentTokenStored(Guid subscriberId, Guid storedPaymentTokenId, string cardType, string cardLast4, string token)
        {
            SubscriberId = subscriberId;
            StoredPaymentTokenId = storedPaymentTokenId;
            CardType = cardType;
            CardLast4 = cardLast4;
            Token = token;
        }
    }

    public class RemovePaymentToken : Command
    {
        public readonly Guid SubscriberId;
        public readonly Guid StoredPaymentTokenId;

        public RemovePaymentToken(Guid subscriberId, Guid storedPaymentTokenId)
        {
            SubscriberId = subscriberId;
            StoredPaymentTokenId = storedPaymentTokenId;
        }
    }

    public class RemoveHostedPaymentToken : Event
    {
        public readonly Guid SubscriberId;
        public readonly Guid StoredPaymentTokenId;
        public readonly string Token;

        public RemoveHostedPaymentToken(Guid subscriberId, Guid storedPaymentTokenId, string token)
        {
            SubscriberId = subscriberId;
            StoredPaymentTokenId = storedPaymentTokenId;
            Token = token;
        }
    }

    public class PaymentTokenRemoved : Event
    {
        public readonly Guid SubscriberId;
        public readonly Guid StoredPaymentTokenId;

        public PaymentTokenRemoved(Guid subscriberId, Guid storedPaymentTokenId)
        {
            SubscriberId = subscriberId;
            StoredPaymentTokenId = storedPaymentTokenId;
        }
    }
}
