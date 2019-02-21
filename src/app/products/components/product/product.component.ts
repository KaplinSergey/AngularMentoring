import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product', // <app-product></app-product>
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;
  Category = Category;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    return {
      panel: true,
      'panel-default': true,
      'not-available': !this.product.isAvailable,
      available: this.product.isAvailable,
    };
  }

  setStyles() {
    return {
      'list-style-type': 'upper-roman'
    };
  }
}
