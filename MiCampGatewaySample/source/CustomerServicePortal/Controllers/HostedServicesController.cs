using HSP;
using Microsoft.AspNetCore.Mvc;
using ReactiveDomain.Messaging;
using ReactiveDomain.Messaging.Bus;

namespace CustomerServicePortal.Controllers
{
    public class HostedServicesController : Controller
    {
        private readonly ICommandPublisher _cmdPublisher;
        private readonly HostedServiceRm _rm;

        public HostedServicesController(HostedServiceRm rm, ICommandPublisher cmdPublisher)
        {
            _rm = rm;
            _cmdPublisher = cmdPublisher;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View(new HostedServiceForms.Registration { HostedServiceId = Guid.NewGuid() });
        }

        [HttpPost]
        public async Task<IActionResult> Add(HostedServiceForms.Registration form)
        {
            var cmd = MessageBuilder.New(() => new HostedServiceMsgs.RegisterHostedService(form.HostedServiceId, form.Name));
            _cmdPublisher.Send(cmd);
            return RedirectToAction("HostedService", new { hostedServiceId = form.HostedServiceId });
        }

        [HttpGet]
        public async Task<IActionResult> HostedService(Guid hostedServiceId)
        {
            return _rm.TryGetDashboard(hostedServiceId, out var dashboard)
                ? View(dashboard)
                : NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddServiceLevel(Guid hostedServiceId, HostedServiceForms.AddServiceLevel form)
        {
            var cmd = MessageBuilder.New(() => new HostedServiceMsgs.AddServiceLevel(hostedServiceId, form.ServiceLevelId, form.Description, form.Price));
            _cmdPublisher.Send(cmd);
            return RedirectToAction("HostedService", new { hostedServiceId });
        }

        [HttpPost]
        public async Task<IActionResult> SetDefaultServiceLevel(Guid hostedServiceId, Guid serviceLevelId)
        {
            var cmd = MessageBuilder.New(() => new HostedServiceMsgs.SetDefaultServiceLevel(hostedServiceId, serviceLevelId));
            _cmdPublisher.Send(cmd);
            return RedirectToAction("HostedService", new { hostedServiceId });
        }

        [HttpPost]
        public async Task<IActionResult> RemoveServiceLevel(Guid hostedServiceId, Guid serviceLevelId)
        {
            var cmd = MessageBuilder.New(() => new HostedServiceMsgs.RemoveServiceLevel(hostedServiceId, serviceLevelId));
            _cmdPublisher.Send(cmd);
            return RedirectToAction("HostedService", new { hostedServiceId });
        }

        [HttpPost]
        public async Task<IActionResult> Remove(Guid hostedServiceId)
        {
            var cmd = MessageBuilder.New(() => new HostedServiceMsgs.RemoveHostedService(hostedServiceId));
            _cmdPublisher.Send(cmd);

            return RedirectToAction("Index");
        }
    }
}
