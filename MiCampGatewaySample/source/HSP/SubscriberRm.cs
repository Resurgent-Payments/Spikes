using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging.Bus;

namespace HSP
{
    public class SubscriberRm : ReadModelBase,
        IHandle<SubscriberMsgs.Subscribed>,
        IHandle<SubscriberMsgs.PaymentTokenStored>,
        IHandle<SubscriberMsgs.PaymentTokenRemoved>
    {
        private readonly List<ListItem> _subscribers = new();
        private readonly Dictionary<Guid, Dashboard> _dashboards = new();

        public IReadOnlyList<ListItem> Subscribers => _subscribers.AsReadOnly();

        public SubscriberRm(IConfiguredConnection connection) : base(nameof(SubscriberRm), connection)
        {
            EventStream.Subscribe<SubscriberMsgs.Subscribed>(this);
            EventStream.Subscribe<SubscriberMsgs.PaymentTokenStored>(this);
            EventStream.Subscribe<SubscriberMsgs.PaymentTokenRemoved>(this);

            Start<Subscriber>();
        }

        public void Handle(SubscriberMsgs.Subscribed message)
        {
            throw new NotImplementedException();
        }

        public void Handle(SubscriberMsgs.PaymentTokenStored message)
        {
            throw new NotImplementedException();
        }

        public void Handle(SubscriberMsgs.PaymentTokenRemoved message)
        {
            throw new NotImplementedException();
        }


        public class ListItem
        {
            public readonly Guid SubscriberId;
            public readonly string Name;

            public ListItem(Guid subscriberId, string name)
            {
                SubscriberId = subscriberId;
                Name = name;
            }
        }

        public class Dashboard
        {
            public readonly Guid SubscriberId;
            public readonly string Name;
            public readonly List<StoredToken> Tokens = new List<StoredToken>();

            public Dashboard(Guid subscriberId, string name)
            {
                SubscriberId = subscriberId;
                Name = name;
            }
        }

        public class StoredToken
        {
            public readonly Guid TokenId;
            public readonly string CardType;
            public readonly string CardLast4;

            public StoredToken(Guid tokenId, string cardType, string cardLast4)
            {
                TokenId = tokenId;
                CardType = cardType;
                CardLast4 = cardLast4;
            }
        }
    }
}
