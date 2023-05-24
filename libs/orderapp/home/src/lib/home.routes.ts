import { Routes } from '@angular/router';
import { OrderappHomeComponent } from './orderapp-home/orderapp-home.component';
import { provideState } from '@ngrx/store';
import {
  ORDER_FEATURE_KEY,
  orderReducer,
} from '@hotel/orderapp/order/data-access/order';

import {
  PRODUCTS_FEATURE_KEY,
  productsReducer,
} from '@hotel/orderapp/product/data-access';

import {
  CART_FEATURE_KEY,
  cartReducer,
} from '@hotel/orderapp/cart/data-access';

export const homeRoutes: Routes = [
  {
    path: '',
    component: OrderappHomeComponent,
    providers: [
      provideState(ORDER_FEATURE_KEY, orderReducer),
      provideState(PRODUCTS_FEATURE_KEY, productsReducer),
      provideState(CART_FEATURE_KEY, cartReducer),
    ],
  },
];
