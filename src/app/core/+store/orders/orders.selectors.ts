import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrdersState } from './orders.state';
import { getRouterState } from './../router';
import { OrderModel } from '../../../orders/models/order';
import { CartService } from '../../../cart/services/cart.service';
import { ServiceLocator } from '../../services/locator.service';


export const getOrdersState = createFeatureSelector<OrdersState>('orders');

export const getOrdersData = createSelector(getOrdersState, (state: OrdersState) => state.data);
export const getOrdersError = createSelector(getOrdersState, (state: OrdersState) => state.error);
export const getSelectedOrder = createSelector(getOrdersState, (state: OrdersState) => state.selectedOrder);
export const getOrdersLoaded = createSelector(getOrdersState, (state: OrdersState) => state.loaded);

export const getSelectedOrderByUrl = createSelector(
    getOrdersData,
    getRouterState,
    (orders, router): OrderModel => {
        const orderID = router.state.params.orderID;

        if (orderID) {
            return orders.find(order => order.id === +orderID);
        } else {
            const cart = ServiceLocator.injector.get(CartService);
            return new OrderModel(null, false, '', '', '', '', cart.getCart().items);
        }
    });
