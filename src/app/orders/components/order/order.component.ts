import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderModel } from '../../models/order';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input()
  order: OrderModel;

  @Output() completeOrder = new EventEmitter<OrderModel>();

  constructor() { }

  ngOnInit() {
  }

  onCompleteOrder(): void {
    this.completeOrder.emit(this.order);
  }
}
