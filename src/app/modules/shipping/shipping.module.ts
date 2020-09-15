import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingOutletComponent } from './shipping-outlet.component';
import { ShippingRoutingModule } from './shipping-routing.module';



@NgModule({
  declarations: [
    ShippingOutletComponent
  ],
  imports: [
    CommonModule,
    ShippingRoutingModule
  ]
})
export class ShippingModule { }
