import { Component, OnInit, Input } from '@angular/core';
import { CartItemModel } from '../../models/cart-item-model';


@Component({
  selector: 'app-cart-item',
  templateUrl: './сart-item.component.html',
  styleUrls: ['./сart-item.component.css'],
})
export class СartItemComponent implements OnInit {
  @Input()
  item: CartItemModel;

  constructor() { }

  ngOnInit() {
  }
}
