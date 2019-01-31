import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { CartService } from './cart/services/cart.service';
import { Subscription } from 'rxjs';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  showCart: boolean;
  private sub: Subscription;

  @ViewChild('appTitle')
  title: ElementRef;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.sub = this.cartService.showCartChannel$.subscribe(
      data => (this.showCart = data)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    (<HTMLElement>this.title.nativeElement).innerText = 'Shop';
  }
}
