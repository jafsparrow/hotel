import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappTableFeatureAddComponent } from '@hotel/orderapp/table/feature/add';
import { OrderappTableFeatureListComponent } from '@hotel/orderapp/table/feature/list';
import { Store } from '@ngrx/store';
import { loadFloorTables, loadFloors } from '@hotel/orderapp/table/data-access';

@Component({
  selector: 'hotel-orderapp-backoffice-feature-table-manage',
  standalone: true,
  imports: [CommonModule, OrderappTableFeatureListComponent],
  templateUrl: './orderapp-backoffice-feature-table-manage.component.html',
  styleUrls: ['./orderapp-backoffice-feature-table-manage.component.css'],
})
export class OrderappBackofficeFeatureTableManageComponent {
  constructor(private store: Store) {
    // [todo] table displching should move shell component
    this.store.dispatch(loadFloors());
    this.store.dispatch(loadFloorTables({ floorId: 1 }));
  }
}
