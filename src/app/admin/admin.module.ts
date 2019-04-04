import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRouterComponents } from './admin-routing.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [adminRouterComponents],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsModule
  ]
})
export class AdminModule { }
