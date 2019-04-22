import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../orders/models/order';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getOrdersData, getOrdersError } from './../../../core/+store';
import * as OrdersActions from './../../../core/+store/orders/orders.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders$: Observable<ReadonlyArray<OrderModel>>;
  ordersError$: Observable<Error | string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.orders$ = this.store.pipe(select(getOrdersData));
    this.ordersError$ = this.store.pipe(select(getOrdersError));

    this.store.dispatch(new OrdersActions.GetOrders());
  }

  onCompleteOrder(order: OrderModel): void {
    const doneOrder = {...order, done: true};
    this.store.dispatch(new OrdersActions.UpdateOrder(doneOrder));
  }

}
