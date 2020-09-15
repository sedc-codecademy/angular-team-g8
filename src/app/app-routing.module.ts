import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'dashboard', loadChildren:() => import('./modules/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule)},
  // {path: 'products', loadChildren: () => {}},
  // {path: 'login', component: ''},
  // {path: 'register', component: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
