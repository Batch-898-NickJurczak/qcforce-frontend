import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../store';

@Injectable()
export class AssociateTokenInterceptor implements HttpInterceptor{

    constructor( private store: AppState){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone ({
            setHeaders: {
                Authorization: `Bearer ${this.store.associateSurvey.token}`
            }
        });
        return next.handle(request);
    }
}
