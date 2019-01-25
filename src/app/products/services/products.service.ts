import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel('Angular for dummies',
      'Angular Tutorial: Learn Angular from scratch step by step', 100, Category.Books, true, ['Amazon', 'Ebay'], [10, 9, 8]),
      new ProductModel('C# in Depth',
       'Third Edition has been thoroughly revised to cover the new features of C# 5', 200, Category.Books, true, ['Amazon'], [10, 9, 8]),
      new ProductModel('JavaScript: The Good Parts',
       'JavaScript tutorial', 150, Category.Books, true, ['Ebay'], [10, 9, 8])
    ];
  }
}
