import { CartItemModel } from '../../cart/models/cart-item-model';

export class OrderModel {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public address: string,
        public phone: string,
        public items?: Array<CartItemModel>
    ) { }
}
