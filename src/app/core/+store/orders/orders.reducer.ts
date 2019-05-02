import { OrdersActions, OrdersActionTypes } from './orders.actions';
import { orderAdapter, OrdersState, initialOrdersState } from './orders.state';
import { OrderModel } from './../../../orders/models/order';

export function ordersReducer(
  state = initialOrdersState,
  action: OrdersActions
): OrdersState {
  console.log(`Reducer: Action came in! ${action.type}`);
  switch (action.type) {
    case OrdersActionTypes.GET_ORDERS: {
      console.log('GET_ORDERS action being handled!');
      return { ...state, loading: true };
    }
    case OrdersActionTypes.GET_ORDERS_SUCCESS: {
      console.log('GET_ORDERS_SUCCESS action being handled!');
      const data = [...<Array<OrderModel>>action.payload];
      return orderAdapter.addAll(data, {
        ...state,
        loading: false,
        loaded: true,
        selectedOrder: null
      });
    }
    case OrdersActionTypes.GET_ORDERS_ERROR: {
      console.log('GET_ORDERS_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }
    case OrdersActionTypes.CREATE_ORDER: {
      console.log('CREATE_ORDER action being handled!');
      return { ...state };
    }
    case OrdersActionTypes.CREATE_ORDER_SUCCESS: {
      console.log('CREATE_TASK_SUCCESS action being handled!');
      const order = { ...<OrderModel>action.payload };
      // const data = [...state.data, order];
      return orderAdapter.addOne(order, state);
    }
    case OrdersActionTypes.UPDATE_ORDER: {
      console.log('UPDATE_ORDER action being handled!');
      return { ...state };
    }
    case OrdersActionTypes.UPDATE_ORDER_SUCCESS: {
      console.log('UPDATE_ORDERS_SUCCESS action being handled!');
      const order = { ...<OrderModel>action.payload };
      // const data = [...state.data];
      // const index = data.findIndex(o => o.id === order.id);
      // data[index] = order;
      return orderAdapter.updateOne({
        id: order.id,
        changes: order
      }, state);
    }
    case OrdersActionTypes.UPDATE_ORDER_ERROR: {
      console.log('UPDATE_TASK_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error
      };
    }
    case OrdersActionTypes.DELETE_ORDER: {
      console.log('DELETE_ORDER action being handled!');
      return { ...state };
    }
    default: {
      console.log('UNKNOWN_ORDER action being handled!');
      return state;
    }
  }
}
