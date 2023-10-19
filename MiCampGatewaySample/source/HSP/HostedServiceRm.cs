using ReactiveDomain.Foundation;
using ReactiveDomain.Messaging.Bus;

namespace HSP;

public class HostedServiceRm : ReadModelBase,
    IHandle<HostedServiceMsgs.HostedServiceRegistered>,
    IHandle<HostedServiceMsgs.ServiceLevelAdded>,
    IHandle<HostedServiceMsgs.DefaultServiceLevelSet>,
    IHandle<HostedServiceMsgs.ServiceLevelRemoved>,
    IHandle<HostedServiceMsgs.HostedServiceRemoved>
{
    private List<HostedServiceListItem> _list = new();
    private Dictionary<Guid, HostedServiceDashboard> _dashboards = new();

    public IReadOnlyList<HostedServiceListItem> List => _list.AsReadOnly();
    public bool TryGetDashboard(Guid dashboardId, out HostedServiceDashboard dashboard)
        => _dashboards.TryGetValue(dashboardId, out dashboard);


    public HostedServiceRm(IConfiguredConnection connection) : base(nameof(HostedServiceRm), connection)
    {
        EventStream.Subscribe<HostedServiceMsgs.HostedServiceRegistered>(this);
        EventStream.Subscribe<HostedServiceMsgs.ServiceLevelAdded>(this);
        EventStream.Subscribe<HostedServiceMsgs.DefaultServiceLevelSet>(this);
        EventStream.Subscribe<HostedServiceMsgs.ServiceLevelRemoved>(this);
        EventStream.Subscribe<HostedServiceMsgs.HostedServiceRemoved>(this);

        Start<HostedService>();
    }

    public void Handle(HostedServiceMsgs.HostedServiceRegistered msg)
    {
        _list.Add(new HostedServiceListItem(msg.HostedServiceId, msg.Name));
        _dashboards.Add(msg.HostedServiceId, new HostedServiceDashboard(msg.HostedServiceId, msg.Name));
    }

    public void Handle(HostedServiceMsgs.ServiceLevelAdded msg)
    {
        if (_dashboards.TryGetValue(msg.HostedServiceId, out var dashboard))
        {
            dashboard.AddServiceLevel(new ServiceLevel(msg.ServiceLevelId, msg.Description, msg.Price));
        }
    }

    public void Handle(HostedServiceMsgs.DefaultServiceLevelSet msg)
    {
        if (_dashboards.TryGetValue(msg.HostedServiceId, out var dashboard))
        {
            dashboard.SetDefaultServiceLevel(msg.ServiceLevelId);
        }
    }

    public void Handle(HostedServiceMsgs.ServiceLevelRemoved msg)
    {
        if (_dashboards.TryGetValue(msg.HostedServiceId, out var dashboard))
        {
            dashboard.RemoveServiceLevel(msg.ServiceLevelId);
        }
    }

    public void Handle(HostedServiceMsgs.HostedServiceRemoved msg)
    {
        _list.RemoveAll(hs => hs.HostedServiceId == msg.HostedServiceId);
        _dashboards.Remove(msg.HostedServiceId);
    }

    public class HostedServiceListItem
    {
        public readonly Guid HostedServiceId;
        public readonly string Name;

        public HostedServiceListItem(Guid hostedServiceId, string name)
        {
            HostedServiceId = hostedServiceId;
            Name = name;
        }
    }

    public class HostedServiceDashboard
    {
        public readonly Guid HostedServiceId;
        public readonly string Name;

        private List<ServiceLevel> _serviceLevels = new();
        private Guid _defaultServiceLevel;

        public IReadOnlyList<ServiceLevel> ServiceLevels => _serviceLevels.AsReadOnly();
        public Guid DefaultServiceLevel => _defaultServiceLevel;

        public HostedServiceDashboard(Guid hostedServiceId, string name)
        {
            HostedServiceId = hostedServiceId;
            Name = name;
        }

        public void AddServiceLevel(ServiceLevel serviceLevel)
        {
            _serviceLevels.Add(serviceLevel);
        }
        public void RemoveServiceLevel(Guid serviceLevelId)
        {
            _serviceLevels.RemoveAll(pl => pl.ServiceLevelId == serviceLevelId);
        }
        public void SetDefaultServiceLevel(Guid serviceLevelId)
        {
            _defaultServiceLevel = serviceLevelId;
        }
    }

    public class ServiceLevel
    {
        public readonly Guid ServiceLevelId;
        public readonly string Description;
        public readonly decimal Price;

        public ServiceLevel(Guid serviceLevelId, string description, decimal price)
        {
            ServiceLevelId = serviceLevelId;
            Description = description;
            Price = price;
        }
    }
}

