import {
  buildRoute,
  ServicesRoutes
} from "./services-routes";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceUtils } from "./services-utils";

@Injectable({
  providedIn: "root",
})
export class FacturacionService {
  constructor(
    private serviceUtils: ServiceUtils,
  ) { }

  public getClientes(): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.getClientes, 'get');
  }
  public getProductos(): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.getProductos, 'get');
  }

  public getVentas(): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.getVentas, 'get');
  }

  public setVentas(data): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.setVentas, 'post', data);
  }

  public updateVenta(data): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.updateVenta, 'put', data, data.id);

   //  return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.updateVenta, data), 'post', data.id);
  }

  public deleteVenta(data): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.deleteVenta, 'delete', data);
  }

}
