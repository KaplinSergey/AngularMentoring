import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { СartItemComponent } from './components/сart-item/сart-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CartComponent, СartItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
