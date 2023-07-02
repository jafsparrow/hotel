import { Routes } from '@angular/router';
import {
  COMPANY_FEATURE_KEY,
  CompanyEffects,
  companyReducer,
} from '@hotel/orderapp/company/data-access';
import { AuthGuard } from '@hotel/orderapp/core';
import {
  ORDER_FEATURE_KEY,
  OrderEffects,
  orderReducer,
} from '@hotel/orderapp/order/data-access/order';

import {
  PosSessionEffects,
  SESSION_FEATURE_KEY,
  posSessionsReducer,
} from '@hotel/orderapp/possession/data-access';
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
      provideState(COMPANY_FEATURE_KEY, companyReducer),
      provideEffects(CompanyEffects),
      provideState(SESSION_FEATURE_KEY, posSessionsReducer),
      provideEffects(PosSessionEffects),
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
