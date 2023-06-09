import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import {
  login,
  loginFail,
  loginSuccess,
  logout,
  signUp,
  signUpFail,
  signUpSuccess,
} from './authentication.actions';

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  LogInEffects$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap((payload) =>
        this.authService
          .logIn(payload.loginData.username, payload.loginData.password!)
          .pipe(
            map((res) => loginSuccess({ user: res.user, token: res.token })),
            catchError((error) => of(loginFail(error)))
          )
      )
    );
  });

  loginSuccessEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap((payload) => {
          console.log('this happened now', payload);
          localStorage.setItem('token', payload.token!);
          localStorage.setItem('user', JSON.stringify(payload.user));
          this.router.navigateByUrl('shell');
        })
      );
    },
    { dispatch: false }
  );

  signUpEffects$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUp),
      switchMap((user) =>
        this.authService.signUp(user).pipe(
          map((res) => signUpSuccess({ user: res.user, token: res.token })),
          catchError((error) => of(signUpFail(error)))
        )
      )
    );
  });

  signUpSuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signUpSuccess),
      tap((payload) => {
        console.log('this happened now');
        localStorage.setItem('token', payload.token!);
        localStorage.setItem('user', JSON.stringify(payload.user));
        this.router.navigateByUrl('org');
      })

      // map((payload) => loadOrgInfo({ organisationID: payload.user.companyId }))
    );
  });

  logoutEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        tap((_) => localStorage.removeItem('token')),
        tap((_) => {
          localStorage.removeItem('user');
          this.router.navigate(['login']);
        })
      );
    },
    { dispatch: false }
  );
}
