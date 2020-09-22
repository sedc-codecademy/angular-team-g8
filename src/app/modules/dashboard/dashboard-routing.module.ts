import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { RoleGuard } from '../../services/role.guard';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('../../modules/users/users.module').then(
            (users) => users.UsersModule
          ),
        canActivate: [AuthGuardGuard, RoleGuard],
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../../modules/orders/orders.module').then(
            (order) => order.OrdersModule
          ),
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'invoices',
        loadChildren: () =>
          import('../../modules/invoices/invoices.module').then(
            (invoice) => invoice.InvoicesModule
          ),
        canActivate: [AuthGuardGuard, RoleGuard],
      },
      {
        path: 'shipping',
        loadChildren: () =>
          import('../../modules/shipping/shipping.module').then(
            (shipping) => shipping.ShippingModule
          ),
        canActivate: [AuthGuardGuard, RoleGuard],
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../../modules/products/products.module').then(
            (products) => products.ProductsModule
          ),
        canActivate: [AuthGuardGuard, RoleGuard],
      },
      // {
      //   path: 'profile',
      //   component: ProfileComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
