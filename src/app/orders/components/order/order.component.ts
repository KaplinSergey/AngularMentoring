import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from '../../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: OrderModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.order = new OrderModel(null, '', '', '', '');
  }

  onGoBack() {
    this.router.navigate(['./../'], { relativeTo: this.route });
  }

  onSaveOrder() {
    alert('Your order is accepted!');
    this.onGoBack();
  }
}
