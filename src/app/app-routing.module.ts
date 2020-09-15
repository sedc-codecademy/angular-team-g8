import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: 'dashboard', loadChildren:() => import('./modules/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule)},
  // {path: 'products', loadChildren: () => {}},
  // {path: 'login', component: ''},
  // {path: 'register', component: ''},
  
  { path: 'orders', loadChildren: () => import('./modules/orders/orders.module').then(orders => orders.OrdersModule) },
  { path: 'shipping', loadChildren: () => import('./modules/shipping/shipping.module').then(shipping => shipping.ShippingModule) },

  {
    path: "users",
    loadChildren: () =>
      import("./modules/users/users.module").then((users) => users.UsersModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
