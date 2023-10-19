using ReactiveDomain;
using ReactiveDomain.Messaging;

namespace HSP;

public class HostedService : AggregateRoot
{
    private bool _removed = false;
    private Guid _defaultServiceId = Guid.Empty;
    private HashSet<Guid> _serviceLevels = new();

    public HostedService(Guid hostedServiceId, string name, ICorrelatedMessage msg) : base(msg)
    {
        RegisterEvents();

        Raise(new HostedServiceMsgs.HostedServiceRegistered(hostedServiceId, name));
    }

    public HostedService()
    {
        RegisterEvents();
    }

    private void RegisterEvents()
    {
        Register<HostedServiceMsgs.HostedServiceRegistered>(Apply);
        Register<HostedServiceMsgs.ServiceLevelAdded>(Apply);
        Register<HostedServiceMsgs.DefaultServiceLevelSet>(Apply);
        Register<HostedServiceMsgs.ServiceLevelRemoved>(Apply);
        Register<HostedServiceMsgs.HostedServiceRemoved>(Apply);
    }

    public void AddServiceLevel(Guid serviceLevelId, string description, decimal price)
    {
        if (!_serviceLevels.Contains(serviceLevelId))
        {
            Raise(new HostedServiceMsgs.ServiceLevelAdded(Id, serviceLevelId, description, price));
        }
    }

    public void SetDefaultServiceLevel(Guid serviceLevelId)
    {
        if (_defaultServiceId != serviceLevelId)
        {
            Raise(new HostedServiceMsgs.DefaultServiceLevelSet(Id, serviceLevelId));
        }
    }

    public void RemoveServiceLevel(Guid serviceLevelId)
    {
        if (_serviceLevels.Contains(serviceLevelId))
        {
            Raise(new HostedServiceMsgs.ServiceLevelRemoved(Id, serviceLevelId));
        }
    }

    public void Remove()
    {
        if (!_removed)
        {
            Raise(new HostedServiceMsgs.HostedServiceRemoved(Id));
        }
    }


    private void Apply(HostedServiceMsgs.HostedServiceRegistered msg)
    {
        Id = msg.HostedServiceId;
    }

    private void Apply(HostedServiceMsgs.ServiceLevelAdded msg)
    {
        _serviceLevels.Add(msg.ServiceLevelId);
    }

    private void Apply(HostedServiceMsgs.DefaultServiceLevelSet msg)
    {
        _defaultServiceId = msg.ServiceLevelId;
    }

    private void Apply(HostedServiceMsgs.ServiceLevelRemoved msg)
    {
        _serviceLevels.Remove(msg.ServiceLevelId);
    }

    private void Apply(HostedServiceMsgs.HostedServiceRemoved _)
    {
        _removed = true;
    }
}
