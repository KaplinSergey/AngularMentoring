import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Promise<Array<ProductModel>> {
    const data = [
      new ProductModel('Angular for dummies',
      'Angular Tutorial: Learn Angular from scratch step by step',
      100, Category.Books, true, ['Amazon', 'Ebay'], [10, 9, 8], new Date(2019, 2, 4, 3, 15)),
      new ProductModel('C# in Depth',
       'Third Edition has been thoroughly revised to cover the new features of C# 5',
        200, Category.Books, false, ['Amazon'], [10, 9, 8], new Date(2019, 1, 5, 3, 25)),
      new ProductModel('JavaScript: The Good Parts',
       'JavaScript tutorial',
       150, Category.Books, true, ['Ebay'], [10, 9, 8], new Date(2019, 2, 9, 2, 15))
    ];

    return <Promise<Array<ProductModel>>>new Promise((resolve, reject) => {
      resolve(data);
    }

    ).catch(error => error);
  }
}
