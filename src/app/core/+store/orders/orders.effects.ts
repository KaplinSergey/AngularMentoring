import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as OrdersActions from './orders.actions';
import * as RouterActions from './../router/router.actions';

// rxjs
import { Observable } from 'rxjs';
import { concatMap, pluck, switchMap, map } from 'rxjs/operators';
import { OrderService } from './../../../orders/services/order.service';
import { OrderModel } from '../../../orders/models/order';
import { CartService } from '../../../cart/services/cart.service';

@Injectable()
export class OrdersEffects {



  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private cartService: CartService) {
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
          return new OrdersActions.UpdateOrderSuccess(order);
        })
        .catch(err => new OrdersActions.UpdateOrderError(err))
    )
  );

  @Effect()
  updateOrderSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersActions.UpdateOrder>(OrdersActions.OrdersActionTypes.UPDATE_ORDER_SUCCESS),
    map(
      action =>
        new RouterActions.Go({
          path: ['/admin/orders']
        })
    )
  );

  @Effect()
  createOrder$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersActions.CreateOrder>(OrdersActions.OrdersActionTypes.CREATE_ORDER),
    pluck('payload'),
    concatMap((payload: OrderModel) =>
      this.orderService
        .add(payload)
        .then(order => {
          this.cartService.clearCart();
          return new OrdersActions.CreateOrderSuccess(order);
        })
        .catch(err => new OrdersActions.CreateOrderError(err))
    )
  );

  @Effect()
  createOrderSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<OrdersActions.CreateOrder>(OrdersActions.OrdersActionTypes.CREATE_ORDER_SUCCESS),
    map(
      action => new RouterActions.Go({
        path: ['/products-list']
      })
    )
  );
}
