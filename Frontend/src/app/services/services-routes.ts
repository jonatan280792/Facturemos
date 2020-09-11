import { Config } from '@config/index';

const { baseUrlMotor } = Config.api;

const ServicesRoutes = {
  getClientes: {
    needsAuth: false,
    url: baseUrlMotor + '/api/consultas/getClientes',
  },
  getProductos: {
    needsAuth: false,
    url: baseUrlMotor + '/api/consultas/getProductos',
  },
  getVentas: {
    needsAuth: false,
    url: baseUrlMotor + '/api/consultas/getVentas',
  },
  setVentas: {
    needsAuth: false,
    url: baseUrlMotor + '/api/consultas/setVentas',
  },
  updateVenta: {
    needsAuth: false,
    url: baseUrlMotor + '/api/consultas/updateVenta',
  },
  deleteVenta: {
    needsAuth: false,
    url: baseUrlMotor + '/api/consultas/deleteVenta',
  }
}

const buildRoute = (path, params) => {
  const route = Object.assign({}, path);

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      route.url = route.url.replace(new RegExp(':' + key, 'g'), encodeURIComponent(params[key]) );
    }
  }

  return route;
};

export { buildRoute, ServicesRoutes };
