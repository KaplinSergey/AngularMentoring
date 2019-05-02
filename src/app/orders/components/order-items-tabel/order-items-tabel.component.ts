import { Component, OnInit, Input } from '@angular/core';
import { CartItemModel } from '../../../cart/models/cart-item-model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items-tabel.component.html',
  styleUrls: ['./order-items-tabel.component.css']
})
export class OrderItemsTabelComponent implements OnInit {
  @Input()
  orderItems: Array<CartItemModel>;

  constructor() { }

  ngOnInit() {
  }

}
