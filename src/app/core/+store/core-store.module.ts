import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterStateSerializerProvider, routerReducers, RouterEffects } from './router';
import { environment } from './../../../environments/environment';

// @Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CartService } from '../../cart/services/cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([RouterEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    RouterStateSerializerProvider
  ]
})
export class CoreStoreModule { }
