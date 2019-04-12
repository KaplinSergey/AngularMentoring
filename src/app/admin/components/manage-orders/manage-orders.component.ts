import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../orders/models/order';
import { OrderService } from '../../../orders/services/order.service';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, OrdersState } from './../../../core/+store';
import * as OrderActions from './../../../core/+store/orders/orders.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders: Promise<Array<OrderModel>>;
  ordersState$: Observable<OrdersState>;

  constructor(
    private orderService: OrderService,
    private store: Store<AppState>) { }

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.ordersState$ = this.store.pipe(select('orders'));
    // this.orders = this.orderService.getOrders();
  }

  onCompleteOrder(order: OrderModel): void {
    this.store.dispatch(new OrderActions.DoneOrder(order));
  }

}
