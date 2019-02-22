import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data = [
    new ProductModel(1, 'Angular for dummies',
      'Angular Tutorial: Learn Angular from scratch step by step',
      100, Category.Books, true, ['Amazon', 'Ebay'], [10, 9, 8], new Date(2019, 2, 4, 3, 15)),
    new ProductModel(2, 'C# in Depth',
      'Third Edition has been thoroughly revised to cover the new features of C# 5',
      200, Category.Books, false, ['Amazon'], [10, 9, 8], new Date(2019, 1, 5, 3, 25)),
    new ProductModel(3, 'JavaScript: The Good Parts',
      'JavaScript tutorial',
      150, Category.Books, true, ['Ebay'], [10, 9, 8], new Date(2019, 2, 9, 2, 15))
  ];

  constructor() { }

  getProducts(): Promise<Array<ProductModel>> {
    return <Promise<Array<ProductModel>>>new Promise((resolve, reject) => {
      resolve(this.data);
    })
    .catch(error => error);
  }

  getProduct(id: number | string): Promise<ProductModel> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }
}
