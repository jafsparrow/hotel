import { Routes } from '@angular/router';
import { OrderappDashboardFeaturePageComponent } from './orderapp-dashboard-feature-page/orderapp-dashboard-feature-page.component';
import { OrderappDashboardFeatureOrderStatsComponent } from '@hotel/orderapp/dashboard/feature/order-stats';
import { OrderappDashboardFeatureProductStatComponent } from '@hotel/orderapp/dashboard/feature/product-stat';
import { OrderappDashboardFeatureStaffStatComponent } from '@hotel/orderapp/dashboard/feature/staff-stat';
import { OrderappDashboardFeatureOrderReportComponent } from '@hotel/orderapp/dashboard/feature/order-report';
export const dashboardRoutes: Routes = [
  {
    path: '',
    component: OrderappDashboardFeaturePageComponent,
    providers: [],
    children: [
      {
        path: 'order',
        component: OrderappDashboardFeatureOrderStatsComponent,
      },
      {
        path: 'report',
        component: OrderappDashboardFeatureOrderReportComponent,
      },
      {
        path: 'product',
        component: OrderappDashboardFeatureProductStatComponent,
      },
      {
        path: 'staff',
        component: OrderappDashboardFeatureStaffStatComponent,
      },
    ],
  },
];
