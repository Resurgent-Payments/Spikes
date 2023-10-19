namespace CustomerServicePortal.Controllers
{
    public static class HostedServiceForms
    {
        public class Registration
        {
            public Guid HostedServiceId { get; set; }
            public string Name { get; set; }
        }

        public class AddServiceLevel
        {
            public Guid ServiceLevelId { get; set; }
            public string Description { get; set; }
            public decimal Price { get; set; }
        }
    }
}
