import { Routes } from '@angular/router';
import { OrderappBackofficeFeaturePageComponent } from './orderapp-backoffice-feature-page/orderapp-backoffice-feature-page.component';

export const shellRoutes: Routes = [
  {
    path: '',
    component: OrderappBackofficeFeaturePageComponent,
    children: [
      {
        path: 'product',
        loadComponent: () =>
          import('@hotel/orderapp/product/feature/admin-list').then(
            (c) => c.OrderappProductFeatureAdminListComponent
          ),
      },
      {
        path: 'category',
        loadComponent: () =>
          import('@hotel/orderapp/backoffice/feature/category-manage').then(
            (c) => c.OrderappBackofficeFeatureCategoryManageComponent
          ),
      },
      {
        path: 'collection',
        loadComponent: () =>
          import('@hotel/orderapp/backoffice/feature/collection-manage').then(
            (c) => c.OrderappBackofficeFeatureCollectionManageComponent
          ),
      },
      {
        path: '',
        loadComponent: () =>
          import('@hotel/orderapp/backoffice/feature/company-manage').then(
            (c) => c.OrderappBackofficeFeatureCompanyManageComponent
          ),
      },
      {
        path: 'kitchen',
        loadComponent: () =>
          import('@hotel/orderapp/backoffice/feature/kitchen-manage').then(
            (c) => c.OrderappBackofficeFeatureKitchenManageComponent
          ),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('@hotel/orderapp/backoffice/feature/user-manage').then(
            (c) => c.OrderappBackofficeFeatureUserManageComponent
          ),
      },
      {
        path: 'table',
        loadComponent: () =>
          import('@hotel/orderapp/backoffice/feature/table-manage').then(
            (c) => c.OrderappBackofficeFeatureTableManageComponent
          ),
      },
    ],
  },
];
