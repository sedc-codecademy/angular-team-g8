import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { SingleOrderComponent } from './components/single-order/single-order.component';
import { OrdersWrapperComponent } from './orders-wrapper.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrdersReducer } from './store/orders.reducer';
import { OrdersEffects } from './store/orders.effect';

@NgModule({
  declarations: [OrdersWrapperComponent, AllOrdersComponent, SingleOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    StoreModule.forFeature('orders', OrdersReducer),
    EffectsModule.forFeature([OrdersEffects])
  ]
})
export class OrdersModule { }
