import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';

@Injectable()
export class AssociateTokenInterceptor implements HttpInterceptor {
  // Read token out of store into this variable
  private token$ = this.store.pipe(select((state) => state.associateSurvey.token));

  constructor(private store: Store<AppState>) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if token is currently set in the store
    let tokenIsSet: boolean;
    this.token$.subscribe((token) => (tokenIsSet = '' !== token));

    if (tokenIsSet) {
      // Add Token to the header of this request
      this.token$.subscribe(
        (token) =>
          (request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          }))
      );
    }

    // return request to the next handler
    return next.handle(request);
  }
}
