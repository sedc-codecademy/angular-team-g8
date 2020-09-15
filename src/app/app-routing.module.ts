import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
<<<<<<< HEAD
  {path: 'dashboard', loadChildren:() => import('./modules/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule)},
  // {path: 'products', loadChildren: () => {}},
  // {path: 'login', component: ''},
  // {path: 'register', component: ''},
=======
  //{path: 'dashboard', loadChildren: () => {}},
  //{path: 'products', loadChildren: () => {}},
  //{path: 'login', component: ''},
  //{path: 'register', component: ''},
  { path: 'shipping', loadChildren: () => import('./modules/shipping/shipping.module').then(shipping => shipping.ShippingModule) },
 
>>>>>>> 0692524f0febe8d0e0d375603352407a27b1e089
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
