import { Routes } from '@angular/router';
import { OrderappHomeComponent } from './orderapp-home/orderapp-home.component';
import { provideState } from '@ngrx/store';
import {
  ORDER_FEATURE_KEY,
  orderReducer,
} from '@hotel/orderapp/order/data-access/order';

export const homeRoutes: Routes = [
  {
    path: '',
    component: OrderappHomeComponent,
    providers: [provideState(ORDER_FEATURE_KEY, orderReducer)],
  },
];
