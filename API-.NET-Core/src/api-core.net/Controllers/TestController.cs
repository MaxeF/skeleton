using Microsoft.AspNetCore.Mvc;
using System;

namespace api_core.net.Controllers
{
    [Route("/")]
    public class TestController
    {
        [HttpGet]
        public IActionResult Get()
        {
            return new ObjectResult("Test OK");
        }
    }
}
