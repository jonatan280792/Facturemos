using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Dtos
{
    public class ProductosDto
    {
        public int id_producto { get; set; }
        public string producto { get; set; }
        public bool estado { get; set; }
        public decimal precio { get; set; }
        public int inventario { get; set; }
    }
}
