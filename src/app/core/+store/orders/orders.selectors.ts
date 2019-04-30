import { createFeatureSelector, createSelector } from '@ngrx/store';
import { orderAdapter, OrdersState } from './orders.state';
import { getRouterState } from './../router';
import { OrderModel } from '../../../orders/models/order';
import { CartService } from '../../../cart/services/cart.service';
import { ServiceLocator } from '../../services/locator.service';


export const getOrdersState = createFeatureSelector<OrdersState>('orders');

// export const getOrdersData = createSelector(getOrdersState, (state: OrdersState) => state.data);
export const {
    selectEntities: getOrderEntities,
    selectAll: getOrdersData
} = orderAdapter.getSelectors(getOrdersState);

export const getOrdersError = createSelector(getOrdersState, (state: OrdersState) => state.error);
export const getSelectedOrder = createSelector(getOrdersState, (state: OrdersState) => state.selectedOrder);
export const getOrdersLoaded = createSelector(getOrdersState, (state: OrdersState) => state.loaded);

export const getSelectedOrderByUrl = createSelector(
    getOrderEntities,
    getRouterState,
    (orders, router): OrderModel => {
        const orderID = router.state.params.orderID;

        if (orderID) {
            // return orders.find(order => order.id === +orderID);
            return orders[orderID];
        } else {
            const cart = ServiceLocator.injector.get(CartService);
            return new OrderModel(null, false, '', '', '', '', cart.getCart().items);
        }
    });
