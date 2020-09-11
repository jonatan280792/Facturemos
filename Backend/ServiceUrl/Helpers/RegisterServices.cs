using Business.Interfaces;
using Business.Services;
using Microsoft.Practices.Unity;
using Repository.Interfaces;
using Repository.Repositories;

namespace ServiceUrl.Helpers
{
    public class RegisterServices
    {
        public static void Register(ref UnityContainer container)
        {
            // Facturacion
            container.RegisterType<IFacturacionService, FacturacionService>(new HierarchicalLifetimeManager());
            container.RegisterType<IFacturacionRepository, FacturacionRepository>(new HierarchicalLifetimeManager());
        }
    }
}