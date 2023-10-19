using Microsoft.AspNetCore.Mvc;

namespace CustomerServicePortal.Controllers
{
    public class SubscribersController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View();
        }
    }
}
