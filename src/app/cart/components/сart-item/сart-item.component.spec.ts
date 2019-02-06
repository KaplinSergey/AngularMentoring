import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { СartItemComponent } from './сart-item.component';

describe('СartItemComponent', () => {
  let component: СartItemComponent;
  let fixture: ComponentFixture<СartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ СartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(СartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
