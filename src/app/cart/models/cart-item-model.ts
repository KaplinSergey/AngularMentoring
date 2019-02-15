import { ProductModel } from '../../products/models/product-model';

export class CartItemModel {
    constructor(
        public product: ProductModel,
        public quantity: number,
        public name = product.name,
        public price = product.price
    ) {}
}
