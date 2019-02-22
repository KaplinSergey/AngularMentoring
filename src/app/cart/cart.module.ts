import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './components/cart/cart.component';
import { СartItemComponent } from './components/сart-item/сart-item.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartComponent, СartItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CartRoutingModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
