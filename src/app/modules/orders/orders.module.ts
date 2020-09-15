import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { SingleOrderComponent } from './components/single-order/single-order.component';
import { OrdersWrapperComponent } from './orders-wrapper.component';

@NgModule({
  declarations: [OrdersWrapperComponent, AllOrdersComponent, SingleOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
