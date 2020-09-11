using Business.Interfaces;
using Entity.Dtos;
using Entity.Mappers;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public class FacturacionService: IFacturacionService
    {
        IFacturacionRepository _repository;
        public FacturacionService(IFacturacionRepository repository)
        {
            _repository = repository;
        }
        public List<ClientesDto> getClientes() => _repository.getClientes().AsLstClientes();
        public List<ProductosDto> getProductos() => _repository.getProductos().AsLstProductos();
        public List<VentasDto> getVentas() => _repository.getVentas().AsLstVentas();
        public ResultDto setVentas(VentasDto dto) => _repository.setVentas(dto).AsResultDto();
        public ResultDto updateVenta(VentasDto dto) => _repository.updateVenta(dto).AsResultDto();
        public ResultDto deleteVenta(int id) => _repository.deleteVenta(id).AsResultDto();
    }
}
