import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
// rxjs
import { pluck } from 'rxjs/operators';
import { ProductModel } from './../../models/product-model';
import { ProductsService } from '../../services/products.service';
import { Category } from '../../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;
  originalProduct: ProductModel;
  category = Category;
  categoryValues = Category;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = { ...product };
      this.originalProduct = { ...product };
      });

    // this.product = new ProductModel();

    // this.route.paramMap
    //   .pipe(
    //     switchMap((params: Params) => {
    //       return params.get('productID')
    //         ? this.productsService.getProduct(+params.get('productID'))
    //         : Promise.resolve(null);
    //     }))
    //   .subscribe(
    //     product => {
    //       this.product = { ...product };
    //       this.originalProduct = { ...product };
    //     },
    //     err => console.log(err)
    //   );
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productsService.updateProduct(product);
    } else {
      this.productsService.addProduct(product);
    }
    this.originalProduct = { ...this.product };
    this.onGoBack();
  }

  onGoBack() {
    this.router.navigate(['admin/products']);
  }

  categoryKeys(): Array<string> {
    const keys = Object.keys(this.category);
    return keys.slice(keys.length / 2);
  }

}
