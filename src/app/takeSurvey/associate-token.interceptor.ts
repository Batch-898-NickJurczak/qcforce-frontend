import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';

@Injectable()
export class AssociateTokenInterceptor implements HttpInterceptor{

    // Read token out of store into this variable
    private token$;

    constructor(private store: Store<AppState>){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // If token is in store
            
            // Add Token to the header of this request
        
        // return request to the next handler
        return next.handle(request);
    }
}
