import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../../products/models/product-model';
import { CartModel } from '../models/cart-model';
import { Subject } from 'rxjs';

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
    this.cart.products.push(product);
    this.showCart(this.cart.getProductsCount() > 0);
  }

  showCart(data: boolean) {
    this.channel.next(data);
  }
}
