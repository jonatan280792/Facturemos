using Entity.Dtos;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IFacturacionRepository
    {
        DataTable getClientes();
        DataTable getProductos();
        DataTable getVentas();
        DataTable setVentas(VentasDto dto);
        DataTable updateVenta(VentasDto dto);
        DataTable deleteVenta(int id);

    }
}
