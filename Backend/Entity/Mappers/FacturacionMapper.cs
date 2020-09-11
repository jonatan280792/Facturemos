using Entity.Dtos;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Mappers
{
    public static class FacturacionMapper
    {
        public static List<ClientesDto> AsLstClientes(this DataTable table)
        {
            List<ClientesDto> lst = new List<ClientesDto>();

            if (table != null)
            {
                foreach (DataRow row in table.Rows)
                {
                    lst.Add(new ClientesDto()
                    {
                        id_cliente = Convert.ToInt32(row["id_cliente"].ToString()),
                        nombres = row["nombres"].ToString(),
                        apellidos = row["apellidos"].ToString(),
                        cliente = row["cliente"].ToString(),
                        fecha_nacimiento = Convert.ToDateTime(row["fecha_nacimiento"].ToString()),
                        estado = Convert.ToBoolean(row["estado"].ToString())
                    });
                }
            }

            return lst;
        }

        public static List<ProductosDto> AsLstProductos(this DataTable table)
        {
            List<ProductosDto> lst = new List<ProductosDto>();

            if (table != null)
            {
                foreach (DataRow row in table.Rows)
                {
                    lst.Add(new ProductosDto()
                    {
                        id_producto = Convert.ToInt32(row["id_producto"].ToString()),
                        producto = row["producto"].ToString(),
                        precio = Convert.ToDecimal(row["precio"].ToString()),
                        estado = Convert.ToBoolean(row["estado"].ToString()),
                        inventario = Convert.ToInt32(row["inventario"].ToString())
                    });
                }
            }

            return lst;
        }

        public static List<VentasDto> AsLstVentas(this DataTable table)
        {
            List<VentasDto> lst = new List<VentasDto>();

            if (table != null)
            {
                foreach (DataRow row in table.Rows)
                {
                    lst.Add(new VentasDto()
                    {
                        id = Convert.ToInt32(row["id"].ToString()),
                        id_cliente = Convert.ToInt32(row["id_cliente"].ToString()),
                        cliente = row["cliente"].ToString(),
                        id_producto = Convert.ToInt32(row["id_producto"].ToString()),
                        producto = row["producto"].ToString(),
                        fecha_compra = Convert.ToDateTime(row["fecha_compra"].ToString()),
                        valor = Convert.ToDecimal(row["valor"].ToString())
                    });
                }
            }

            return lst;
        }
    }
}
