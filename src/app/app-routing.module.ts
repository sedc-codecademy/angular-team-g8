import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path: 'dashboard', loadChildren: () => {}},
  //{path: 'products', loadChildren: () => {}},
  //{path: 'login', component: ''},
  //{path: 'register', component: ''},
  { path: 'shipping', loadChildren: () => import('./modules/shipping/shipping.module').then(shipping => shipping.ShippingModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
