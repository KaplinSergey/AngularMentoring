import { ProductModel } from '../../products/models/product-model';
import { CartItemModel } from './cart-item-model';

export class CartModel {
    items: Array<CartItemModel>;

    constructor() {
        this.items = new Array<CartItemModel>();
    }

    getFullProductsPrice(): number {
        return this.items.reduce((price, item) =>
         price + (item.product.price * item.quantity), 0);
    }

    getProductsCount(): number {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
}
