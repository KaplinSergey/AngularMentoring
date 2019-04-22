import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as OrdersActions from './orders.actions';

// rxjs
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { concatMap, pluck, switchMap } from 'rxjs/operators';
import { OrderService } from './../../../orders/services/order.service';
import { OrderModel } from '../../../orders/models/order';

@Injectable()
export class OrdersEffects {



  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private router: Router) {
  }

  @Effect()
  getOrders$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersActions.GetOrders>(OrdersActions.OrdersActionTypes.GET_ORDERS),
    switchMap((action: OrdersActions.GetOrders) =>
      this.orderService
        .getOrders()
        .then(orders => new OrdersActions.GetOrdersSuccess(orders))
        .catch(err => new OrdersActions.GetOrdersError(err))
    )
  );

  @Effect()
  updateOrder$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersActions.UpdateOrder>(OrdersActions.OrdersActionTypes.UPDATE_ORDER),
    pluck('payload'),
    concatMap((payload: OrderModel) =>
      this.orderService
        .update(payload)
        .then(order => {
          this.router.navigate(['/admin/orders']);
          return new OrdersActions.UpdateTaskSuccess(order);
        })
        .catch(err => new OrdersActions.UpdateTaskError(err))
    )
  );
}
