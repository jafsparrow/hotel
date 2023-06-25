import { Routes } from '@angular/router';
import { OrderappOrderFeaturePageComponent } from './orderapp-order-feature-page/orderapp-order-feature-page.component';
import { OrderappOrderFeatureOrderDetailEditComponent } from '@hotel/orderapp/order/feature/order-detail-edit';

export const orderRoutes: Routes = [
  {
    path: '',
    component: OrderappOrderFeaturePageComponent,
    providers: [],
  },
  {
    path: 'edit',
    component: OrderappOrderFeatureOrderDetailEditComponent,
  },
];
