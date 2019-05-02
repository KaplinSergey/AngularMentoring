import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../models/order';
import { OrderService } from '../../services/order.service';

import { Store } from '@ngrx/store';
import { AppState } from './../../../core/+store';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Promise<Array<OrderModel>>;

  constructor(
    private orderService: OrderService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();

    console.log('We have a store! ', this.store);
  }

  onCompleteOrder(order: OrderModel): void {
  }
}
