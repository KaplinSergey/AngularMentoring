import { ProductModel } from '../../products/models/product-model';

export class CartModel {
    products: Array<ProductModel>;

    constructor() {
        this.products = new Array<ProductModel>();
    }

    getFullProductsPrice(): number {
        return this.products.reduce((a, b) => a + b.price, 0);
    }

    getProductsCount(): number {
        return this.products.length;
    }
}
