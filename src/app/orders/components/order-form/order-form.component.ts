import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
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
  validationMessages = new Array<string>();
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

  get phones(): FormArray {
    return <FormArray>this.orderForm.get('phones');
  }

  getPhone(index: number): AbstractControl {
    const phones = <FormArray>this.orderForm.controls.phones;
    const phoneGroup = <FormGroup>phones.controls[index];
    return phoneGroup.controls.phone;
  }

  ngOnInit() {
    this.sub = this.store
      .pipe(select(getSelectedOrderByUrl))
      .subscribe(order => this.order = order);

    this.buildForm();

    this.watchValueChanges(0);

    if (this.order.id) {
      this.order.phones.slice(1).forEach(element => {
        this.onAddPhone();
      });

      this.setFormValues();
    }
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      address: ['', [Validators.required]],
      phones: this.fb.array([this.buildPhones()])
    });
  }

  private buildPhones(): FormGroup {
    return this.fb.group({
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
      phones: this.getOrderPhones()
    });
  }

  private getOrderPhones() {
    return this.order.phones.map((p) => ({phone: p}));
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhones());
    this.watchValueChanges(this.phones.length - 1);
  }

  onDeletePhone(index: number): void {
    this.phones.removeAt(index);
  }

  private watchValueChanges(index: number) {
    const phoneControl = this.getPhone(index);
    const sub = phoneControl.valueChanges.subscribe(value =>
      this.setValidationMessage(phoneControl, 'phone', index)
    );
    this.sub.add(sub);
  }

  private setValidationMessage(c: AbstractControl, controlName: string, index: number) {
    this.validationMessages[index] = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessages[index] = Object.keys(c.errors)
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
    this.order.firstName = this.orderForm.value.firstName;
    this.order.lastName = this.orderForm.value.lastName;
    this.order.address = this.orderForm.value.address;

    for (let index = 0; index < this.orderForm.value.phones.length; index++) {
      this.order.phones[index] = this.orderForm.value.phones[index].phone;
    }

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
