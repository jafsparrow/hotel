import { Route, Routes } from '@angular/router';
import { OrderappShellComponent } from './orderapp-shell.component';
import { provideState } from '@ngrx/store';
import {
  CART_FEATURE_KEY,
  cartReducer,
} from '@hotel/orderapp/cart/data-access';
import {
  COMPANY_FEATURE_KEY,
  CompanyEffects,
  companyReducer,
} from '@hotel/orderapp/company/data-access';
import { provideEffects } from '@ngrx/effects';
import { AdminGuard, SessionGuard } from '@hotel/orderapp/core';

export const shellRoutes: Routes = [
  { path: '', component: OrderappShellComponent },
  {
    path: 'home',

    loadChildren: () =>
      import('@hotel/orderapp/home').then((c) => c.homeRoutes),
    canActivate: [SessionGuard],
  },
  {
    path: 'office',
    loadChildren: () =>
      import('@hotel/orderapp/backoffice/feature/page').then(
        (m) => m.shellRoutes
      ),
    providers: [
      provideState(COMPANY_FEATURE_KEY, companyReducer),
      provideEffects(CompanyEffects),
    ],
  },
  {
    path: 'order',
    loadChildren: () =>
      import('@hotel/orderapp/order/feature/page').then((r) => r.orderRoutes),
  },

  {
    path: 'take-away',
    loadComponent: () =>
      import('@hotel/orderapp/order/feature/take-away').then(
        (c) => c.OrderappOrderFeatureTakeAwayComponent
      ),
  },
  {
    path: 'count',
    loadComponent: () =>
      import('@hotel/orderapp/order/feature/product-count').then(
        (c) => c.OrderappOrderFeatureProductCountComponent
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('@hotel/orderapp/order/data-access/order').then(
        (c) => c.orderRoutes
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@hotel/orderapp/cart/feature/cart-list').then(
        (c) => c.OrderappCartFeatureCartListComponent
      ),
    providers: [provideState(CART_FEATURE_KEY, cartReducer)],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@hotel/orderapp/dashboard/feature/page').then(
        (c) => c.dashboardRoutes
      ),
  },
  //   {
  //     path: 'admin',
  //     providers: [
  //       AdminService,
  //       {provide: ADMIN_API_KEY, useValue: '12345'},
  //     ],
  //     children: [
  //       {path: 'users', component: AdminUsersComponent},
  //       {path: 'teams', component: AdminTeamsComponent},
  //     ],
  //   },
];
