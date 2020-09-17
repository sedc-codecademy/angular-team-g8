import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (dashboard) => dashboard.DashboardModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (products) => products.ProductsModule
      ),
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/orders/orders.module').then(
        (orders) => orders.OrdersModule
      ),
  },
  {
    path: 'shipping',
    loadChildren: () =>
      import('./modules/shipping/shipping.module').then(
        (shipping) => shipping.ShippingModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((users) => users.UsersModule),
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./modules/invoices/invoices.module').then(
        (invoices) => invoices.InvoicesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
