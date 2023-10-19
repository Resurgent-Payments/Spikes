using ReactiveDomain.Messaging;

namespace HSP;

public static class HostedServiceMsgs
{
    public class RegisterHostedService : Command
    {
        public readonly Guid HostedServiceId;
        public readonly string Name;

        public RegisterHostedService(Guid hostedServiceId, string name)
        {
            HostedServiceId = hostedServiceId;
            Name = name;
        }
    }

    public class HostedServiceRegistered : Event
    {
        public readonly Guid HostedServiceId;
        public readonly string Name;

        public HostedServiceRegistered(Guid hostedServiceId, string name)
        {
            HostedServiceId = hostedServiceId;
            Name = name;
        }
    }

    public class RemoveHostedService : Command
    {
        public readonly Guid HostedServiceId;

        public RemoveHostedService(Guid hostedServiceId)
        {
            HostedServiceId = hostedServiceId;
        }
    }

    public class HostedServiceRemoved : Event
    {
        public readonly Guid HostedServiceId;

        public HostedServiceRemoved(Guid hostedServiceId)
        {
            HostedServiceId = hostedServiceId;
        }
    }

    public class AddServiceLevel : Command
    {
        public readonly Guid HostedServiceId;
        public readonly Guid ServiceLevelId;
        public readonly string Description;
        public readonly decimal Price;

        public AddServiceLevel(Guid hostedServiceId, Guid serviceLevelId, string description, decimal price)
        {
            HostedServiceId = hostedServiceId;
            ServiceLevelId = serviceLevelId;
            Description = description;
            Price = price;
        }
    }

    public class ServiceLevelAdded : Event
    {
        public readonly Guid HostedServiceId;
        public readonly Guid ServiceLevelId;
        public readonly string Description;
        public readonly decimal Price;

        public ServiceLevelAdded(Guid hostedServiceId, Guid serviceLevelId, string description, decimal price)
        {
            HostedServiceId = hostedServiceId;
            ServiceLevelId = serviceLevelId;
            Description = description;
            Price = price;
        }
    }

    public class SetDefaultServiceLevel : Command
    {
        public readonly Guid HostedServiceId;
        public readonly Guid ServiceLevelId;

        public SetDefaultServiceLevel(Guid hostedServiceId, Guid serviceLevelId)
        {
            HostedServiceId = hostedServiceId;
            ServiceLevelId = serviceLevelId;
        }
    }

    public class DefaultServiceLevelSet : Event
    {
        public readonly Guid HostedServiceId;
        public readonly Guid ServiceLevelId;

        public DefaultServiceLevelSet(Guid hostedServiceId, Guid serviceLevelId)
        {
            HostedServiceId = hostedServiceId;
            ServiceLevelId = serviceLevelId;
        }
    }

    public class RemoveServiceLevel : Command
    {
        public readonly Guid HostedServiceId;
        public readonly Guid ServiceLevelId;

        public RemoveServiceLevel(Guid hostedServiceId, Guid serviceLevelId)
        {
            HostedServiceId = hostedServiceId;
            ServiceLevelId = serviceLevelId;
        }
    }

    public class ServiceLevelRemoved : Event
    {
        public readonly Guid HostedServiceId;
        public readonly Guid ServiceLevelId;

        public ServiceLevelRemoved(Guid hostedServiceId, Guid serviceLevelId)
        {
            HostedServiceId = hostedServiceId;
            ServiceLevelId = serviceLevelId;
        }
    }
}