import { OrdersActions, OrdersActionTypes } from './orders.actions';
import { OrdersState, initialOrdersState } from './orders.state';

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
    default: {
      console.log('UNKNOWN_ORDER action being handled!');
      return state;
    }
  }
}
