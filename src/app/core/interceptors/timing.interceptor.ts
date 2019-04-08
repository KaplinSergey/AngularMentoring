import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class TimingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('products')) {
            console.time(req.url.toString());
        }
        return next.handle(req)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        if (event.url.includes('products')) {
                            console.timeEnd(event.url.toString());
                        }
                        return event;
                    }
                })
            );
    }
}
