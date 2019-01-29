import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { СartItemComponent } from './components/сart-item/сart-item.component';

@NgModule({
  declarations: [CartComponent, СartItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
