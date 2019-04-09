import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductModel } from '../models/product-model';
import { ProductsService } from '../services/products.service';

// rxjs
import { Observable, of, from } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { ProductPromiseService } from '../services/products.promise.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<ProductModel> {

  constructor(
    private productsService: ProductsService,
    private productsPromiseService: ProductPromiseService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    console.log('ProductResolve Guard is called');

    if (!route.paramMap.has('productID')) {
      return of(new ProductModel());
    }

    const id = +route.paramMap.get('productID');
    return from(this.productsPromiseService.getProduct(id)).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/products']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products']);
        // catchError MUST return observable
        return of(null);
      })
    );
  }
}
