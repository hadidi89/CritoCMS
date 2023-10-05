using Crito.Models;
using Crito.Services;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Website.Controllers;

namespace Crito.Controllers
{
    public class ContactController : SurfaceController
    {
        private readonly ContactMessageService _contactMessageService;

        public ContactController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider, ContactMessageService contactMessageService) : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _contactMessageService = contactMessageService;
        }

        public async Task<IActionResult> Index(ContactForm contactForm)
        {
            if (!ModelState.IsValid)
            {
                TempData.Clear();
                ModelState.AddModelError("", "Please review the current error message(s)!");
                return CurrentUmbracoPage();
            }

            var registered = await _contactMessageService.AddContactMessageAsync(contactForm);

            TempData.Clear();
            if (registered)
            {
                TempData["SuccessMessage"] = "Your message has been successfully dispatched!";
                ModelState.Clear();
            }
            else
                TempData["AlreadyRegisteredMessage"] = "There was an issue! The message did not go through!";

            return CurrentUmbracoPage();
        }
    }
}


