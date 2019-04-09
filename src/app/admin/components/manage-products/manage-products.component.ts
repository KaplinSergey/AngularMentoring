import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../products/models/product-model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductPromiseService } from '../../../products/services/products.promise.service';


@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: Promise<Array<ProductModel>>;

  constructor(
    private productsService: ProductPromiseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onUpdate(product: ProductModel) {
    const link = ['edit', product.id];
    this.router.navigate(link, {relativeTo: this.route});
  }

  onAdd() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }
}
