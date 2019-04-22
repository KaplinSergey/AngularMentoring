import { Action } from '@ngrx/store';
import { OrderModel } from '../../../orders/models/order';


export enum OrdersActionTypes {
  GET_ORDERS = '[Orders] GET_ORDERS',
  GET_ORDER = '[Orders] GET_ORDER',
  GET_ORDERS_SUCCESS = '[Orders] GET_ORDERS_SUCCESS',
  GET_ORDERS_ERROR = '[Orders] GET_ORDERS_ERROR',
  CREATE_ORDER = '[Orders] CREATE_ORDER',
  UPDATE_ORDER = '[Orders] UPDATE_ORDER',
  UPDATE_ORDER_SUCCESS = '[Orders] UPDATE_ORDER_SUCCESS',
  UPDATE_ORDER_ERROR = '[Orders] UPDATE_ORDER_ERROR',
  DELETE_ORDER = '[Orders] DELETE_ORDER'
}

export class GetOrders implements Action {
  readonly type = OrdersActionTypes.GET_ORDERS;
}

export class GetOrdersSuccess implements Action {
  readonly type = OrdersActionTypes.GET_ORDERS_SUCCESS;
  constructor(public payload: OrderModel[]) { }
}

export class GetOrdersError implements Action {
  readonly type = OrdersActionTypes.GET_ORDERS_ERROR;
  constructor(public payload: Error | string) { }
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

export class UpdateTaskSuccess implements Action {
  readonly type = OrdersActionTypes.UPDATE_ORDER_SUCCESS;
  constructor(public payload: OrderModel) { }
}

export class UpdateTaskError implements Action {
  readonly type = OrdersActionTypes.UPDATE_ORDER_ERROR;
  constructor(public payload: Error | string) { }
}

export class DeleteOrder implements Action {
  readonly type = OrdersActionTypes.DELETE_ORDER;
  constructor(public payload: OrderModel) { }
}

export type OrdersActions
  = GetOrders
  | GetOrdersSuccess
  | GetOrdersError
  | GetOrder
  | CreateOrder
  | UpdateOrder
  | UpdateTaskSuccess
  | UpdateTaskError
  | DeleteOrder;
