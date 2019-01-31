import { Component, OnInit, Input, Output } from '@angular/core';
import { CartItemModel } from '../../models/cart-item-model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './сart-item.component.html',
  styleUrls: ['./сart-item.component.css'],
})
export class СartItemComponent implements OnInit {
  @Input()
  item: CartItemModel;
  @Output()
  delete: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.item);
  }
}
