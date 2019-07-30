import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { СartItemComponent } from './сart-item.component';
import { KeyValueDiffers } from '@angular/core';
import { CartItemModel } from '../../models/cart-item-model';
import { ProductModel } from '../../../products/models/product-model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

fdescribe('СartItemComponent', () => {
  let component: СartItemComponent;
  let fixture: ComponentFixture<СartItemComponent>;
  let itemEl: DebugElement;
  const expectedItem = new CartItemModel(
    new ProductModel(1, 'test', 'test description', 100), 1);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ СartItemComponent ],
      imports: [FormsModule]
     // providers: [ KeyValueDiffers ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(СartItemComponent);
    component = fixture.componentInstance;

    itemEl = fixture.debugElement.query(By.css('span'));
  });

  fit('should display item name and price', () => {
    component.item = expectedItem;

    fixture.detectChanges();
    console.log(itemEl.nativeElement.innerText);
    expect(itemEl.nativeElement.innerText).toBe(`${expectedItem.product.name} - ${expectedItem.product.price}$`);
  });
});
