import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderItemsTabelComponent } from './components/order-items-tabel/order-items-tabel.component';
import { OrderComponent } from './components/order/order.component';

import { StoreModule } from '@ngrx/store';
import { ordersReducer } from './../core/+store';

@NgModule({
  declarations: [OrderFormComponent, OrderListComponent, OrderItemsTabelComponent, OrderComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('orders', ordersReducer),
    FormsModule,
    OrdersRoutingModule
  ],
  exports: [
    OrderComponent,
    OrderItemsTabelComponent
  ]
})
export class OrdersModule { }
