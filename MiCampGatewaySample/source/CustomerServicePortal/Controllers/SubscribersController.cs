using HSP;
using Microsoft.AspNetCore.Mvc;
using ReactiveDomain.Messaging;
using ReactiveDomain.Messaging.Bus;

namespace CustomerServicePortal.Controllers
{
    public class SubscribersController : Controller
    {
        private readonly SubscriberRm _rm;
        private readonly ICommandPublisher _cmdPublisher;

        public SubscribersController(SubscriberRm rm, ICommandPublisher cmdPublisher)
        {
            _rm = rm;
            _cmdPublisher = cmdPublisher;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View(new SubscriberForms.Subscribe { SubscriberId = Guid.NewGuid() });
        }

        [HttpPost]
        public async Task<IActionResult> Add(SubscriberForms.Subscribe form)
        {
            var msg = MessageBuilder.New(() => new SubscriberMsgs.Subscribe(form.SubscriberId, form.Name));
            _cmdPublisher.Send(msg);
            return RedirectToAction("Subscriber", new { form.SubscriberId });
        }

        [HttpGet]
        public async Task<IActionResult> Subscriber(Guid subscriberId)
            => _rm.TryGetDashboard(subscriberId, out var dashboard)
            ? View(dashboard)
            : NotFound();
    }
}
