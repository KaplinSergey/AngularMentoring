import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy, AfterViewInit {
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
