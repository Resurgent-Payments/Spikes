using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging;
using ReactiveDomain.Messaging.Bus;

namespace HSP;

public class HostedServiceTransientSubscriptions : TransientSubscriber,
    IHandleCommand<HostedServiceMsgs.RegisterHostedService>, IHandleCommand<HostedServiceMsgs.RemoveHostedService>,
    IHandleCommand<HostedServiceMsgs.AddServiceLevel>, IHandleCommand<HostedServiceMsgs.SetDefaultServiceLevel>,
    IHandleCommand<HostedServiceMsgs.RemoveServiceLevel>

{
    private readonly ICorrelatedRepository _repository;

    public HostedServiceTransientSubscriptions(ICorrelatedRepository repository, IDispatcher bus) : base(bus)
    {
        _repository = repository;

        Subscribe<HostedServiceMsgs.RegisterHostedService>(this);
        Subscribe<HostedServiceMsgs.RemoveHostedService>(this);
        Subscribe<HostedServiceMsgs.AddServiceLevel>(this);
        Subscribe<HostedServiceMsgs.SetDefaultServiceLevel>(this);
        Subscribe<HostedServiceMsgs.RemoveServiceLevel>(this);
    }

    public CommandResponse Handle(HostedServiceMsgs.RegisterHostedService cmd)
    {
        var hs = new HostedService(cmd.HostedServiceId, cmd.Name, cmd);
        _repository.Save(hs);
        return cmd.Succeed();
    }

    public CommandResponse Handle(HostedServiceMsgs.RemoveHostedService cmd)
    {
        var hs = _repository.GetById<HostedService>(cmd.HostedServiceId, cmd);
        hs.Remove();
        _repository.Save(hs);
        return cmd.Succeed();
    }

    public CommandResponse Handle(HostedServiceMsgs.AddServiceLevel cmd)
    {
        var hs = _repository.GetById<HostedService>(cmd.HostedServiceId, cmd);
        hs.AddServiceLevel(cmd.ServiceLevelId, cmd.Description, cmd.Price);
        _repository.Save(hs);
        return cmd.Succeed();
    }

    public CommandResponse Handle(HostedServiceMsgs.SetDefaultServiceLevel cmd)
    {
        var hs = _repository.GetById<HostedService>(cmd.HostedServiceId, cmd);
        hs.SetDefaultServiceLevel(cmd.ServiceLevelId);
        _repository.Save(hs);
        return cmd.Succeed();
    }

    public CommandResponse Handle(HostedServiceMsgs.RemoveServiceLevel cmd)
    {
        var hs = _repository.GetById<HostedService>(cmd.HostedServiceId, cmd);
        hs.RemoveServiceLevel(cmd.ServiceLevelId);
        _repository.Save(hs);
        return cmd.Succeed();
    }
}
