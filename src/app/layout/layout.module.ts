import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent, PathNotFoundComponent } from './components';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [ShopComponent, PathNotFoundComponent],
  imports: [
    CommonModule,
    CartModule,
    ProductsModule
  ]
})
export class LayoutModule { }
