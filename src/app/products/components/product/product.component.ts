import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { Category } from '../../models/category';
import { ProductsService } from '../../services/products.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
// rxjs
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product', // <app-product></app-product>
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: ProductModel;
  Category = Category;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.product = new ProductModel();

    this.route.paramMap
    .pipe(
      switchMap((params: Params) => {
        return params.get('productID')
          ? this.productsService.getProduct(+params.get('productID'))
          : Promise.resolve(null);
      }))
    .subscribe(
      product => this.product = { ...product },
      err => console.log(err)
    );
  }
}
