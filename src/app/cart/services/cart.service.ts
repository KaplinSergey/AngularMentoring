import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';
import { CartModel } from '../models/cart-model';
import { Subject } from 'rxjs';
import { CartItemModel } from '../models/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartModel;
  private channel = new Subject<boolean>();
  public showCartChannel$ = this.channel.asObservable();

  constructor() {
    this.cart = new CartModel();
   }


  getCart(): CartModel {
    return this.cart;
  }

  buyProduct(product: ProductModel) {
    const item = this.cart.items.find((e) => e.product.name === product.name);

    if (!item) {
      this.cart.items.push(new CartItemModel(product, 1));
    } else {
      item.quantity++;
    }

    this.showCart(this.getProductsCount() > 0);
  }

  showCart(data: boolean) {
    this.channel.next(data);
  }

  deleteItem(item: CartItemModel) {
    const index: number = this.cart.items.indexOf(item);
    if (index !== -1) {
      this.cart.items.splice(index, 1);
    }
  }

  getFullProductsPrice(): number {
    return this.cart.items.reduce((price, item) =>
     price + (item.product.price * item.quantity), 0);
}

  getProductsCount(): number {
    return this.cart.items.reduce((count, item) => count + item.quantity, 0);
  }
}
