import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product-model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Promise<Array<ProductModel>>;

  constructor(private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: ProductModel) {
    if (product.isAvailable) {
      console.log(`${product.name} has been added to you shoping cart`);
      alert(`"${product.name}" has been added to you shoping cart`);
      this.cartService.buyProduct(product);
    }
  }
}
