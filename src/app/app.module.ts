import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
//  import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimingInterceptor } from './core/interceptors/timing.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    HttpClientModule,
    // AdminModule,
    // MUST BE LAST
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TimingInterceptor,
    multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
