using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging;
using ReactiveDomain.Messaging.Bus;

namespace HSP;

public class SubscriberTransientSubscriptions : TransientSubscriber,
    IHandleCommand<SubscriberMsgs.Subscribe>, IHandleCommand<SubscriberMsgs.StorePaymentToken>,
    IHandleCommand<SubscriberMsgs.RemovePaymentToken>

{
    private readonly ICorrelatedRepository _repository;

    public SubscriberTransientSubscriptions(ICorrelatedRepository repository, IDispatcher bus) : base(bus)
    {
        _repository = repository;

        Subscribe<SubscriberMsgs.Subscribe>(this);
        Subscribe<SubscriberMsgs.StorePaymentToken>(this);
        Subscribe<SubscriberMsgs.RemovePaymentToken>(this);
    }

    public CommandResponse Handle(SubscriberMsgs.Subscribe cmd)
    {
        var sub = new Subscriber(cmd.SubscriberId, cmd.Name, cmd);
        _repository.Save(sub);
        return cmd.Succeed();
    }
    public CommandResponse Handle(SubscriberMsgs.StorePaymentToken cmd)
    {
        var sub = _repository.GetById<Subscriber>(cmd.SubscriberId, cmd);
        sub.StorePaymentToken(cmd.StoredPaymentTokenId, cmd.CardType, cmd.CardLast4, cmd.Token);
        _repository.Save(sub);
        return cmd.Succeed();
    }

    public CommandResponse Handle(SubscriberMsgs.RemovePaymentToken cmd)
    {
        var sub = _repository.GetById<Subscriber>(cmd.SubscriberId, cmd);
        sub.RemovePaymentToken(cmd.StoredPaymentTokenId);
        _repository.Save(sub);
        return cmd.Succeed();
    }
}