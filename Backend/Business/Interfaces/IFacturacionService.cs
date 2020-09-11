using Entity.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IFacturacionService
    {
        List<ClientesDto> getClientes();
        List<ProductosDto> getProductos();
        List<VentasDto> getVentas();
        ResultDto setVentas(VentasDto dto);
        ResultDto deleteVenta(int id_venta);
        ResultDto updateVenta(VentasDto dto);

    }
}
