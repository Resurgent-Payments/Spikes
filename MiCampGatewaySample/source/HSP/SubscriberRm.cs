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

        public bool TryGetDashboard(Guid subscriberId, out Dashboard dashboard) 
            => _dashboards.TryGetValue(subscriberId, out dashboard);

        public SubscriberRm(IConfiguredConnection connection) : base(nameof(SubscriberRm), connection)
        {
            EventStream.Subscribe<SubscriberMsgs.Subscribed>(this);
            EventStream.Subscribe<SubscriberMsgs.PaymentTokenStored>(this);
            EventStream.Subscribe<SubscriberMsgs.PaymentTokenRemoved>(this);

            Start<Subscriber>();
        }

        public void Handle(SubscriberMsgs.Subscribed msg)
        {
            _subscribers.Add(new ListItem(msg.SubscriberId, msg.Name));
            _dashboards.Add(msg.SubscriberId, new Dashboard(msg.SubscriberId, msg.Name));
        }

        public void Handle(SubscriberMsgs.PaymentTokenStored msg)
        {
            if (_dashboards.TryGetValue(msg.SubscriberId, out var dashboard))
            {
                dashboard.Add(new StoredToken(msg.StoredPaymentTokenId, msg.CardType, msg.CardLast4));
            }
        }

        public void Handle(SubscriberMsgs.PaymentTokenRemoved msg)
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
            private readonly List<StoredToken> _tokens = new();


            public readonly Guid SubscriberId;
            public readonly string Name;
            public IReadOnlyList<StoredToken> Tokens => _tokens.AsReadOnly();

            public Dashboard(Guid subscriberId, string name)
            {
                SubscriberId = subscriberId;
                Name = name;
            }

            public void Add(StoredToken token)
            {
                _tokens.Add(token);
            }

            public void Remove(Guid storedPaymentTokenId)
            {
                _tokens.RemoveAll(t => t.StoredPaymentTokenId == storedPaymentTokenId);
            }
        }

        public class StoredToken
        {
            public readonly Guid StoredPaymentTokenId;
            public readonly string CardType;
            public readonly string CardLast4;

            public StoredToken(Guid storedPaymentTokenId, string cardType, string cardLast4)
            {
                StoredPaymentTokenId = storedPaymentTokenId;
                CardType = cardType;
                CardLast4 = cardLast4;
            }
        }
    }
}
