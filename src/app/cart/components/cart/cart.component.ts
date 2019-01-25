import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: CartModel;
  showCart: boolean;

  constructor(private cartService: CartService ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.showCart = this.cart.products.length > 0;
  }
}
