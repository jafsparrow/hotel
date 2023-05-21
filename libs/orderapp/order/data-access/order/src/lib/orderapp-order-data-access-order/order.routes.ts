import { Routes } from '@angular/router';
import { OrderappOrderDataAccessOrderComponent } from './orderapp-order-data-access-order.component';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ORDER_FEATURE_KEY, orderReducer } from './+state/orders.reducers';

export const orderRoutes: Routes = [
  {
    path: '',
    component: OrderappOrderDataAccessOrderComponent,
    providers: [provideState(ORDER_FEATURE_KEY, orderReducer)],
  },
];
