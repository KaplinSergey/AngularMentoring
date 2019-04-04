import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRouterComponents } from './admin-routing.module';
import { ProductsModule } from '../products/products.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [adminRouterComponents],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsModule,
    LayoutModule
  ]
})
export class AdminModule { }
