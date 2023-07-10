import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  loadFloorTables,
  selectFloors,
  selectSelectedFloorId,
  selectTableLoadingIndicator,
  selectTables,
} from '@hotel/orderapp/table/data-access';
import { Customer, Floor, OrderSummary, Table } from '@hotel/common/types';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderappTableFeatureAddComponent } from '@hotel/orderapp/table/feature/add';

@Component({
  selector: 'hotel-orderapp-table-feature-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, OrderappTableFeatureAddComponent],
  templateUrl: './orderapp-table-feature-list.component.html',
  styleUrls: ['./orderapp-table-feature-list.component.css'],
})
export class OrderappTableFeatureListComponent {
  selectFloors$ = this.store.select(selectFloors);
  selectTableLoadIndicator$ = this.store.select(selectTableLoadingIndicator);
  selectTables$ = this.store.select(selectTables);
  selectedFloorId$ = this.store.select(selectSelectedFloorId);
  constructor(private store: Store, private dialog: MatDialog) {}

  findTables(floorId: number) {
    this.store.dispatch(loadFloorTables({ floorId }));
  }

  addTable() {
    this.dialog.open(OrderappTableFeatureAddComponent, {});
  }

  editTable(table: Table) {
    this.dialog.open(OrderappTableFeatureAddComponent, { data: { table } });
  }

  addFloor() {
    return 'hello';
    // this.dialog.open(OrderappKitchenFeatureAddComponent, {});
  }

  editFloor(floor: Floor) {
    return 'hello';
    // this.dialog.open(OrderappKitchenFeatureAddComponent, { data: { kitchen } });
  }
}
