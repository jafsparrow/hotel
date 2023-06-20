import { Routes } from '@angular/router';
import { AuthGuard } from '@hotel/orderapp/core';
import {
  ORDER_FEATURE_KEY,
  OrderEffects,
  orderReducer,
} from '@hotel/orderapp/order/data-access/order';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shell',
  },
  {
    path: 'shell',
    loadChildren: () =>
      import('@hotel/orderapp/shell').then((c) => c.shellRoutes),
    providers: [
      provideState(ORDER_FEATURE_KEY, orderReducer),
      provideEffects(OrderEffects),
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@hotel/orderapp/auth/feature/signin').then(
        (c) => c.OrderappAuthFeatureSigninComponent
      ),
  },
];
