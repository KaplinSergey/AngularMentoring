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
    new OrderModel(1, false, 'Ivan', 'Ivanov', 'Minsk', ['12-367-8932'],
      [
        new CartItemModel(new ProductModel(1, 'Angular for dummies',
          'Angular Tutorial: Learn Angular from scratch step by step',
          100, Category.Books, true, ['Amazon', 'Ebay'], [10, 9, 8], new Date(2019, 2, 4, 3, 15)),
          2)
      ]),
    new OrderModel(2, false, 'Petr', 'Petrov', 'Kiev', ['16-389-8971', '16-129-8981'],
      [
        new CartItemModel(new ProductModel(1, 'Angular for dummies',
          'Angular Tutorial: Learn Angular from scratch step by step',
          100, Category.Books, true, ['Amazon', 'Ebay'], [10, 9, 8], new Date(2019, 2, 4, 3, 15)),
          1),
        new CartItemModel(new ProductModel(2, 'C# in Depth',
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

  update(order: OrderModel): Promise<OrderModel> {
    return new Promise<OrderModel>((resolve, reject) => {
      const i = this.data.findIndex(o => o.id === order.id);

      if (i > -1) {
        resolve(this.data[i] = order);
      } else {
        reject('Specified order not found');
      }
    });
  }

  add(order: OrderModel): Promise<OrderModel> {
    return new Promise<OrderModel>((resolve, reject) => {
      const newOrderID = this.data[this.data.length - 1].id + 1;
      order.id = newOrderID;

      if (this.data.push(order)) {
        resolve(this.data[this.data.length - 1]);
      } else {
        reject('Order not created');
      }
    });
  }
}
