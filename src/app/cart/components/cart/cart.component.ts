import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart-model';
import { CartItemModel } from '../../models/cart-item-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartModel;
  showCart: boolean;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.showCart = this.cart.items.length > 0;
  }

  onDelete(item: CartItemModel) {
    this.cartService.deleteItem(item);
  }

  getProductsCount(): number {
    return this.cartService.getProductsCount();
  }

  getFullProductsPrice(): number {
    return this.cartService.getFullProductsPrice();
  }
}
