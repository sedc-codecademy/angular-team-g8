import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { SingleOrderComponent } from './components/single-order/single-order.component';
import { OrdersWrapperComponent } from './orders-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: OrdersWrapperComponent,
    children: [
      {path: '', component: AllOrdersComponent},
      {path: ':id', component: SingleOrderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
