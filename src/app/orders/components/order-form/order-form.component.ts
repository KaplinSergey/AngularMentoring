import { Component, OnInit } from '@angular/core';
import * as RouterActions from './../../../core/+store/router/router.actions';
import * as OrdersActions from './../../../core/+store/orders/orders.actions';
import { OrderModel } from '../../models/order';
import { CartService } from '../../../cart/services/cart.service';
import { AppState, getSelectedOrderByUrl } from '../../../core/+store';

import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderModel;

  private sub: Subscription;

  constructor(
    private store: Store<AppState>) { }

  ngOnInit() {
    this.sub = this.store
      .pipe(select(getSelectedOrderByUrl))
      .subscribe(order => this.order = order);
  }

  onGoBack() {
    if (this.order.id) {
      this.store.dispatch(new RouterActions.Go({
        path: ['/admin/orders']
      }));
    } else {
      this.store.dispatch(new RouterActions.Go({
        path: ['/cart']
      }));
    }
  }

  onSaveOrder() {
    const order = { ...this.order };

    if (order.id) {
      this.store.dispatch(new OrdersActions.UpdateOrder(order));
    } else {
      this.store.dispatch(new OrdersActions.CreateOrder(order));
    }
  }
}
