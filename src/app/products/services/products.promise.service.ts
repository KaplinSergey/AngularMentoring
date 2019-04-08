import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from '../models/product-model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductPromiseService {
    private productsUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) { }

    getProducts(): Promise<ProductModel[]> {
        return this.http
            .get(this.productsUrl)
            .toPromise()
            .then(response => <ProductModel[]>response)
            .catch(this.handleError);
    }

    getProduct(id: number): Promise<ProductModel> {
        const url = `${this.productsUrl}/${id}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => <ProductModel>response)
            .catch(this.handleError);
    }

    updateProduct(product: ProductModel): Observable<ProductModel> {
        const url = `${this.productsUrl}/${product.id}`,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        return this.http
            .put<ProductModel>(url, body, options)
            .pipe(catchError(this.handleObservableError));
    }

    addProduct(product: ProductModel): Promise<ProductModel> {
        const url = this.productsUrl,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };
        return this.http
            .post(url, body, options)
            .toPromise()
            .then(response => <ProductModel>response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private handleObservableError(err: HttpErrorResponse) {
        let errorMessage: string;
        // A client-side or network error occurred.
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}, body was: ${
                err.error
                }`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
