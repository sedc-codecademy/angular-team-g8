import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: 'dashboard', loadChildren: () => {}},
  // {path: 'products', loadChildren: () => {}},
  // {path: 'login', component: ''},
  // {path: 'register', component: ''},
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (products) => products.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
