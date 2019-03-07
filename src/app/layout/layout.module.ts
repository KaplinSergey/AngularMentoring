import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent, PathNotFoundComponent } from './components';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShopComponent, PathNotFoundComponent, FeedbackComponent],
  imports: [
    CommonModule,
    CartModule,
    ProductsModule,
    FormsModule
  ]
})
export class LayoutModule { }
