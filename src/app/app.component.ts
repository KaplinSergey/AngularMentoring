import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { CartService } from './cart/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'shop';
  showCart: boolean;
  private sub: Subscription;

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
}
