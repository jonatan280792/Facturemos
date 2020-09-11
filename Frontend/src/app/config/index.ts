import { environment } from "@environments/environment";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = { headers: new HttpHeaders() };

httpOptions.headers
  = httpOptions.headers
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json; text/plain');

const Config = {
  api: {    
    baseUrlMotor: environment.serviceUrl,
    options: httpOptions,
    timeout: 3000
  },
  appParams: {
    currencyMask: {
      align: 'right',
      allowNegative: true,
      decimal: ',',
      precision: 2,
      prefix: '$ ',
      suffix: '',
      thousands: '.'
    }    
  },
};

export { Config };