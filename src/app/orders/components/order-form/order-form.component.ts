import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
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
export class OrderFormComponent implements OnInit, OnDestroy {
  order: OrderModel;
  orderForm: FormGroup;
  validationMessage: string;
  placeholder = {
    firstName: 'First Name (required)',
    lastName: 'Last Name (required)',
    address: 'Address (required)',
    phone: 'Phone (required)'
  };

  private sub: Subscription;
  private validationMessagesMap = {
    phone: {
      required: 'Please enter your phone.',
      pattern: 'Please enter a valid phone.'
    }
  };


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

    this.watchValueChanges();
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^\\(?[\\d]{2}\\)?[\\s-]?[\\d]{3}[\\s-]?[\\d]{4}$')]]
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

  private watchValueChanges() {
    const phoneControl = this.orderForm.get('phone');
    const sub = phoneControl.valueChanges.subscribe(value =>
      this.setValidationMessage(phoneControl, 'phone')
    );
    this.sub.add(sub);
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
