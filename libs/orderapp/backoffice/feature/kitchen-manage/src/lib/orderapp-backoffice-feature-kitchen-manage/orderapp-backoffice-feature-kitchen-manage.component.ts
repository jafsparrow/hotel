import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappKitchenFeatureListComponent } from '@hotel/orderapp/kitchen/feature/list';
import { OrderappKitchenFeatureAddComponent } from '@hotel/orderapp/kitchen/feature/add';
import { Store } from '@ngrx/store';
import { loadPrinters } from '@hotel/orderapp/company/data-access';

@Component({
  selector: 'hotel-orderapp-backoffice-feature-kitchen-manage',
  standalone: true,
  imports: [
    CommonModule,
    OrderappKitchenFeatureListComponent,
    OrderappKitchenFeatureAddComponent,
  ],
  templateUrl: './orderapp-backoffice-feature-kitchen-manage.component.html',
  styleUrls: ['./orderapp-backoffice-feature-kitchen-manage.component.css'],
})
export class OrderappBackofficeFeatureKitchenManageComponent {
  constructor(private store: Store) {
    this.store.dispatch(loadPrinters());
  }
}
