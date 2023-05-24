import { Route, Routes } from '@angular/router';
import { OrderappShellComponent } from './orderapp-shell.component';
import { provideState } from '@ngrx/store';

export const shellRoutes: Routes = [
  {
    path: 'home',

    loadChildren: () =>
      import('@hotel/orderapp/home').then((c) => c.homeRoutes),
  },

  {
    path: 'table',
    loadComponent: () =>
      import('@hotel/orderapp/table/feature/list').then(
        (c) => c.OrderappTableFeatureListComponent
      ),
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
