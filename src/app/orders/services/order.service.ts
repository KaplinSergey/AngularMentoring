import { Injectable } from '@angular/core';
import { OrderModel } from '../models/order';
import { CartItemModel } from '../../cart/models/cart-item-model';
import { ProductModel } from '../../products/models/product-model';
import { Category } from '../../products/models/category';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private data = [
    new OrderModel(1, 'Ivan', 'Ivanov', 'Minsk', '102-367-89',
    [
      new CartItemModel( new ProductModel(1, 'Angular for dummies',
      'Angular Tutorial: Learn Angular from scratch step by step',
      100, Category.Books, true, ['Amazon', 'Ebay'], [10, 9, 8], new Date(2019, 2, 4, 3, 15)),
      2)
    ]),
    new OrderModel(2, 'Petr', 'Petrov', 'Kiev', '165-389-89',
    [
      new CartItemModel( new ProductModel(1, 'Angular for dummies',
      'Angular Tutorial: Learn Angular from scratch step by step',
      100, Category.Books, true, ['Amazon', 'Ebay'], [10, 9, 8], new Date(2019, 2, 4, 3, 15)),
      1),
      new CartItemModel( new ProductModel(2, 'C# in Depth',
      'Third Edition has been thoroughly revised to cover the new features of C# 5',
      200, Category.Books, false, ['Amazon'], [10, 9, 8], new Date(2019, 1, 5, 3, 25)),
      1)
    ])
  ];

  constructor() { }

  getOrders(): Promise<Array<OrderModel>> {
    return <Promise<Array<OrderModel>>>new Promise((resolve, reject) => {
      resolve(this.data);
    })
    .catch(error => error);
  }
}
