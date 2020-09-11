using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.Dtos
{
    public class ResultDto
    {
        public int transaccion { get; set; }
        public string Mensaje { get; set; }
        public string estado { get; set; }
    }
}
