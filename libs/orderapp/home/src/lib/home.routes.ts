import { Routes } from '@angular/router';
import { OrderappHomeComponent } from './orderapp-home/orderapp-home.component';
import { provideState } from '@ngrx/store';
import {
  ORDER_FEATURE_KEY,
  OrderEffects,
  orderReducer,
} from '@hotel/orderapp/order/data-access/order';

import {
  CATEGORY_FEATURE_KEY,
  CategoryEffects,
  categoryReducer,
} from '@hotel/orderapp/category/data-access';

import {
  PRODUCTS_FEATURE_KEY,
  ProductsEffects,
  productsReducer,
} from '@hotel/orderapp/product/data-access';

import {
  CART_FEATURE_KEY,
  cartReducer,
} from '@hotel/orderapp/cart/data-access';
import { provideEffects } from '@ngrx/effects';

export const homeRoutes: Routes = [
  {
    path: '',
    component: OrderappHomeComponent,
    providers: [
      provideState(PRODUCTS_FEATURE_KEY, productsReducer),
      provideState(CATEGORY_FEATURE_KEY, categoryReducer),
      provideState(ORDER_FEATURE_KEY, orderReducer),
      provideState(CART_FEATURE_KEY, cartReducer),

      provideEffects(ProductsEffects),
      provideEffects(CategoryEffects),
    ],
  },
];
