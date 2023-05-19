import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'shell',
    loadChildren: () =>
      import('@hotel/orderapp/shell').then((c) => c.shellRoutes),
  },
];
