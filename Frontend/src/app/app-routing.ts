import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@modules/login/login.component';
import { SalesComponent } from '@modules/facturacion/sales/sales.component';

const routes: Routes = [
  {
    // canActivate: [SessionAuthGuard],
    component: LoginComponent,
    path: 'login',
  },
  {
    // canActivate: [SessionAuthGuard],
    component: SalesComponent,
    path: 'sales',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
