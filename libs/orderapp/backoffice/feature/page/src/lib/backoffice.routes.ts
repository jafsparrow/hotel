import { Routes } from '@angular/router';
import { OrderappBackofficeFeaturePageComponent } from './orderapp-backoffice-feature-page/orderapp-backoffice-feature-page.component';

export const shellRoutes: Routes = [
  { path: '', component: OrderappBackofficeFeaturePageComponent },
  {
    path: 'product',
    loadComponent: () =>
      import('@hotel/orderapp/product/feature/add').then(
        (c) => c.OrderappProductFeatureAddComponent
      ),
  },
];
