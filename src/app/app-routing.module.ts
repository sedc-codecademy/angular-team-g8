import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (dashboard) => dashboard.DashboardModule
      ),
    canActivate: [AuthGuardGuard],
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
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'shipping',
    loadChildren: () =>
      import('./modules/shipping/shipping.module').then(
        (shipping) => shipping.ShippingModule
      ),
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((users) => users.UsersModule),
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./modules/invoices/invoices.module').then(
        (invoices) => invoices.InvoicesModule
      ),
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
