import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from '../../models/order';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cart: CartService) { }

  ngOnInit() {
    this.order = new OrderModel(null, false, '', '', '', '', this.cart.getCart().items);
  }

  onGoBack() {
    this.router.navigate(['./../'], { relativeTo: this.route });
  }

  onSaveOrder() {
    alert('Your order is accepted!');
    this.onGoBack();
  }
}
