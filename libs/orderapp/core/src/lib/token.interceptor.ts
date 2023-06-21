import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@hotel/common/types';
import { AuthService } from '@hotel/orderapp/auth/data-access';
import { Observable, throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authService!: AuthService;

  constructor(private injector: Injector) {
    console.log('token interceptor constructed');
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(AuthService);
    const user: User | unknown = this.authService.getUser() || {};
    req = req.clone({
      body: req.body.append(user),
    });

    console.log('body', req.body);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${'hello'}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('seett header at the intercepor');
    return next.handle(req);
  }
}

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((response: any) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.router.navigateByUrl('/login');
          console.log(response);
        }
        return throwError(() => response);
      })
    );
  }
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request', req.method, req.url);
  console.log('authInterceptor');

  // Setting a dummy token for demonstration

  return next(req).pipe(tap((resp) => console.log('response', resp)));
};
