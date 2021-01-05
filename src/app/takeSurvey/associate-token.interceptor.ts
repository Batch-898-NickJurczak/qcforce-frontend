import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';

@Injectable()
export class AssociateTokenInterceptor implements HttpInterceptor{

    private token$ = this.store.pipe(select(state => state.associateSurvey.token));

    constructor(private store: Store<AppState>){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.token$.subscribe( token =>
            console.log(token)
        );

        this.token$.subscribe(token =>
            request = request.clone ({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })
        );

        return next.handle(request);
    }
}
