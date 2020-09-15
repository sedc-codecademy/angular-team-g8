import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingOutletComponent } from './shipping-outlet.component';

const routes:Routes = [
  { 
    path: 'shipping',
    component: ShippingOutletComponent,
    children: []
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingRoutingModule { }
