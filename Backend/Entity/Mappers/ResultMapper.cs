using Entity.Dtos;
using System;
using System.Data;
using System.Linq;

namespace Entity.Mappers
{
    public static class ResultMapper
    {
        public static ResultDto AsResultDto(this DataTable table)
        {
            ResultDto result = new ResultDto();

            if (table != null)
            {
                result = new ResultDto()
                {
                    transaccion = Convert.ToInt32(table.AsEnumerable().First()["transaccion"].ToString()),
                    Mensaje = table.AsEnumerable().First()["Mensaje"].ToString(),
                    estado = table.AsEnumerable().First()["estado"].ToString()
                };
            }
            return result;
        }
    }
}
