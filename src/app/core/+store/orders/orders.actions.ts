import { Action } from '@ngrx/store';
import { OrderModel } from '../../../orders/models/order';


export enum OrdersActionTypes {
  GET_ORDERS = '[Orders] GET_ORDERS',
  GET_ORDER = '[Orders] GET_ORDER',
  CREATE_ORDER = '[Orders] CREATE_ORDER',
  UPDATE_ORDER = '[Orders] UPDATE_ORDER',
  DELETE_ORDER = '[Orders] DELETE_ORDER',
  DONE_ORDER = '[Orders] DONE_ORDER'
}

export class GetOrders implements Action {
  readonly type = OrdersActionTypes.GET_ORDERS;
}

export class GetOrder implements Action {
  readonly type = OrdersActionTypes.GET_ORDER;
  constructor(public payload: number) { }
}

export class CreateOrder implements Action {
  readonly type = OrdersActionTypes.CREATE_ORDER;
  constructor(public payload: OrderModel) { }
}

export class UpdateOrder implements Action {
  readonly type = OrdersActionTypes.UPDATE_ORDER;
  constructor(public payload: OrderModel) { }
}

export class DeleteOrder implements Action {
  readonly type = OrdersActionTypes.DELETE_ORDER;
  constructor(public payload: OrderModel) { }
}

export class DoneOrder implements Action {
  readonly type = OrdersActionTypes.DONE_ORDER;
  constructor(public payload: OrderModel) { }
}

export type OrdersActions
  = GetOrders
  | GetOrder
  | CreateOrder
  | UpdateOrder
  | DeleteOrder
  | DoneOrder;
