import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/category';
import { ProductModel } from '../../models/product-model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product', // <app-product></app-product>
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuy() {
    console.log(`You have bought this ${this.product.name}`);
    this.cartService.buyProduct(this.product);
  }
}
