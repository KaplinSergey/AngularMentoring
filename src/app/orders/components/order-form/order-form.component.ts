import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as RouterActions from './../../../core/+store/router/router.actions';
import * as OrdersActions from './../../../core/+store/orders/orders.actions';
import { OrderModel } from '../../models/order';
import { CartService } from '../../../cart/services/cart.service';
import { AppState, getSelectedOrderByUrl } from '../../../core/+store';

import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderModel;
  orderForm: FormGroup;

  private sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.sub = this.store
      .pipe(select(getSelectedOrderByUrl))
      .subscribe(order => this.order = order);

    this.buildForm();

    if (this.order.id) {
      this.setFormValues();
    }
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      firstName: '',
      lastName: '',
      address: '',
      phone: ['']
    });
  }

  private createForm() {
    this.orderForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      phone: new FormControl()
    });
  }

  private setFormValues() {
    this.orderForm.setValue({
      firstName: this.order.firstName,
      lastName: this.order.lastName,
      address: this.order.address,
      phone: this.order.phone
    });
  }

  onGoBack() {
    if (this.order.id) {
      this.store.dispatch(new RouterActions.Go({
        path: ['/admin/orders']
      }));
    } else {
      this.store.dispatch(new RouterActions.Go({
        path: ['/cart']
      }));
    }
  }

  onSaveOrder() {
    Object.assign(this.order, this.orderForm.value)
    const order = { ...this.order };

    if (order.id) {
      this.store.dispatch(new OrdersActions.UpdateOrder(order));
    } else {
      this.store.dispatch(new OrdersActions.CreateOrder(order));
    }
  }
}
