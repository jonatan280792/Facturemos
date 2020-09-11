using Business.Interfaces;
using Entity.Dtos;
using System.Collections.Generic;
using System.Web.Http;

namespace ServiceUrl.Controllers
{
    public class FacturacionController : ApiController
    {
        IFacturacionService _service;

        public FacturacionController(IFacturacionService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("api/consultas/getClientes")]
        public IHttpActionResult getClientes()
        {
            return Json(_service.getClientes());
        }

        [HttpGet]
        [Route("api/consultas/getProductos")]
        public IHttpActionResult getProductos()
        {
            return Json(_service.getProductos());
        }

        [HttpGet]
        [Route("api/consultas/getVentas")]
        public IHttpActionResult getVentas()
        {
            return Json(_service.getVentas());
        }

        [HttpPost]
        [Route("api/consultas/setVentas")]
        public IHttpActionResult setVentas([FromBody] VentasDto dto)
        {
            return Json(_service.setVentas(dto));
        }

        [HttpPut]
        [Route("api/consultas/updateVenta")]
        public IHttpActionResult updateVenta([FromBody] VentasDto dto)
        {
            return Json(_service.updateVenta(dto));
        }

        [HttpDelete]
        [Route("api/consultas/deleteVenta")]
        public IHttpActionResult deleteVenta(int id_venta)
        {
            return Json(_service.deleteVenta(id_venta));
        }
    }
}
