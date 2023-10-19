using Microsoft.AspNetCore.Mvc;

namespace CustomerServicePortal.Controllers
{
    public class MasterServiceAgreementsController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View();
        }
    }
}
