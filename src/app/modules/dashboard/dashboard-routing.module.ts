import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent ,
  },
  {
    path:"users",
    loadChildren: () =>
    import('../../modules/users/users.module').then(
      (users) => users.UsersModule
    ),
  },
  {
    path:"orders",
    loadChildren: () =>
    import('../../modules/orders/orders.module').then(
      (order) => order.OrdersModule
    ),
  },
  {
    path:"invoices",
    loadChildren: () =>
    import('../../modules/invoices/invoices.module').then(
      (invoice) => invoice.InvoicesModule
    ),
  },
  {
    path:"shipping",
    loadChildren: () =>
    import('../../modules/shipping/shipping.module').then(
      (shipping) => shipping.ShippingModule
    ),
  },
  {
    path:"products",
    loadChildren: () =>
    import('../../modules/products/products.module').then(
      (products) => products.ProductsModule
    ),
  },
  // {
  //   path:"profile",
  //   loadChildren: () =>
  //   import('../../modules/profile/profile.module').then(
  //     (profile) => profile.ProfileModule
  //   ),
  // },

];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
