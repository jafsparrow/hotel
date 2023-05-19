import { Route, Routes } from '@angular/router';
import { OrderappShellComponent } from './orderapp-shell.component';

export const shellRoutes: Routes = [
  {
    path: '',
    component: OrderappShellComponent,
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@hotel/orderapp/home').then((c) => c.OrderappHomeComponent),
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
