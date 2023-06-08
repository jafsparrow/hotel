import { Routes } from '@angular/router';
import {
  ORDER_FEATURE_KEY,
  OrderEffects,
  orderReducer,
} from '@hotel/orderapp/order/data-access/order';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appRoutes: Routes = [
  {
    path: 'shell',
    loadChildren: () =>
      import('@hotel/orderapp/shell').then((c) => c.shellRoutes),
    providers: [
      provideState(ORDER_FEATURE_KEY, orderReducer),
      provideEffects(OrderEffects),
    ],
  },
];
