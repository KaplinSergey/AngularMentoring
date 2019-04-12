import { OrdersActions, OrdersActionTypes } from './orders.actions';
import { OrdersState, initialOrdersState } from './orders.state';
import { OrderModel } from './../../../orders/models/order';

export function ordersReducer(
  state = initialOrdersState,
  action: OrdersActions
): OrdersState {
  console.log(`Reducer: Action came in! ${action.type}`);
  switch (action.type) {
    case OrdersActionTypes.GET_ORDERS: {
      console.log('GET_ORDERS action being handled!');
      return { ...state };
    }
    case OrdersActionTypes.CREATE_ORDER: {
      console.log('CREATE_ORDER action being handled!');
      return { ...state };
    }
    case OrdersActionTypes.UPDATE_ORDER: {
      console.log('UPDATE_ORDER action being handled!');
      return { ...state };
    }
    case OrdersActionTypes.DELETE_ORDER: {
      console.log('DELETE_ORDER action being handled!');
      return { ...state };
    }
    case OrdersActionTypes.DONE_ORDER: {
      console.log('DONE_ORDER action being handled!');
      const id = (<OrderModel>action.payload).id;
      const data = state.data.map(order => {
        if (order.id === id) {
          return { ...action.payload, done: true };
        }
        return order;
      });
      return {
        ...state,
        data
      };
    }
    default: {
      console.log('UNKNOWN_ORDER action being handled!');
      return state;
    }
  }
}
