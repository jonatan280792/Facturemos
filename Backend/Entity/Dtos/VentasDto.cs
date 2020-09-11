using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Dtos
{
    public class VentasDto
    {
        public int id { get; set; }
        public int id_producto { get; set; }
        public string producto { get; set; }
        public int id_cliente { get; set; }
        public string cliente { get; set; }
        public DateTime fecha_compra { get; set; }
        public decimal valor { get; set; }
    }
}
