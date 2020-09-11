using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Dtos
{
    public class ClientesDto
    {
        public int id_cliente { get; set; }
        public string nombres { get; set; }
        public string apellidos { get; set; }
        public string cliente { get; set; }
        public bool estado { get; set; }
        public DateTime fecha_nacimiento { get; set; }

    }
}
