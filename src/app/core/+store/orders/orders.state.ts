import { OrderModel } from '../../../orders/models/order';
import { CartItemModel } from '../../../cart/models/cart-item-model';
import { ProductModel } from '../../../products/models/product-model';
import { Category } from '../../../products/models/category';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface OrdersState extends EntityState<OrderModel> {
    // data: ReadonlyArray<OrderModel>;
    selectedOrder: Readonly<OrderModel>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export const orderAdapter: EntityAdapter<OrderModel> = createEntityAdapter<OrderModel>();

export const initialOrdersState: OrdersState = orderAdapter.getInitialState({
    // data: [],
    selectedOrder: null,
    loading: false,
    loaded: false,
    error: null
});
