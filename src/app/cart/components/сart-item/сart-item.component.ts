import { Component, OnInit, Input, Output, OnDestroy, DoCheck } from '@angular/core';
import { CartItemModel } from '../../models/cart-item-model';
import { EventEmitter } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './сart-item.component.html',
  styleUrls: ['./сart-item.component.css'],
})
export class СartItemComponent implements OnInit, DoCheck, OnDestroy {
  @Input()
  item: CartItemModel;
  @Output()
  delete: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  private differ: any;

  constructor(private differs: KeyValueDiffers) { }

  ngOnInit() {
    this.differ = this.differs.find(this.item).create();
  }

  onDelete() {
    this.delete.emit(this.item);
  }

  ngDoCheck(): void {
    const  changes = this.differ.diff(this.item);

    if (changes) {
      changes.forEachChangedItem(item => console.log(item.key, 'changed from', item.previousValue, 'to', item.currentValue));
    }
  }

  ngOnDestroy(): void {
    alert(`${this.item.product.name} - has been removed from the cart`);
  }
}
