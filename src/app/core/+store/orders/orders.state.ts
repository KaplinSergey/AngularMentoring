import { OrderModel } from '../../../orders/models/order';
import { CartItemModel } from '../../../cart/models/cart-item-model';
import { ProductModel } from '../../../products/models/product-model';
import { Category } from '../../../products/models/category';

export interface OrdersState {
    data: ReadonlyArray<OrderModel>;
    selectedOrder: Readonly<OrderModel>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export const initialOrdersState: OrdersState = {
    data: [],
    selectedOrder: null,
    loading: false,
    loaded: false,
    error: null
};
