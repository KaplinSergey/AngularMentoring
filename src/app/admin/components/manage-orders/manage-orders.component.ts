import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../orders/models/order';
import { OrderService } from '../../../orders/services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders: Promise<Array<OrderModel>>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
