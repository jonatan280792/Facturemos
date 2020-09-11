using Microsoft.Practices.Unity;
using ServiceUrl.Helpers;
using ServiceUrl.Resolver;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.ExceptionHandling;

namespace ServiceUrl
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Register GlobalHandlerException
            config.Services.Replace(typeof(IExceptionHandler), new HandlerException());

            // Web API configuration and services
            var container = new UnityContainer();

            RegisterServices.Register(ref container);

            config.DependencyResolver = new UnityResolver(container);

            // Cors Policy
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
