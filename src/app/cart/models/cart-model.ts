import { CartItemModel } from './cart-item-model';

export class CartModel {
    items: Array<CartItemModel>;

    constructor() {
        this.items = new Array<CartItemModel>();
    }
}
