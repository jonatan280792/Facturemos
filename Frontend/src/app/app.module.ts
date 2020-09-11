import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material';

import { Config } from '@config/index';
import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { SalesComponent } from '@modules/facturacion/sales/sales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditSalesComponent } from '@modules/facturacion/sales/edit-sales/edit-sales.component';
import { CreateSalesComponent } from '@modules/facturacion/sales/create-sales/create-sales.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

import { AngularMaterial } from '@imports/angular-material';
import { ToastrModule } from 'ngx-toastr';

import { services } from '@imports/services';
import { ThemingService } from "@services/theming-service";
import { SessionService } from '@services/session-service';
import { ServiceUtils } from '@services/services-utils';
import { CustomIconService } from '@common/custom-icons/custom-icon.service';
import { FacturacionService } from '@services/facturacion-services';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = Config.appParams.currencyMask;

const imports = [
  CommonModule,
  ToastrModule.forRoot(),
  AngularMaterial,
  CurrencyMaskModule,
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  
];

const providers = [  
  FacturacionService,
  SessionService,
  ServiceUtils,
  CustomIconService,
  ThemingService,
  {
    provide: CURRENCY_MASK_CONFIG,
    useValue: CustomCurrencyMaskConfig,
  },
  { 
    provide: MAT_DIALOG_DATA, useValue: {} 
  },
  { 
    provide: MatDialogRef, useValue: {} 
  },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    LoginComponent,
    CreateSalesComponent,
    EditSalesComponent,
    SalesComponent
  ],
  imports: [imports],
  providers: [providers]  
})
export class AppModule { }
