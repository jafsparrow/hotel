import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { DialogRef } from '@angular/cdk/dialog';
import { setCartCreatedForUser } from '@hotel/orderapp/cart/data-access';
import { Customer, OrderSummary, Table, UserType } from '@hotel/common/types';
import {
  loadFloorTables,
  selectFloors,
  selectSelectedFloorId,
  selectTableLoadingIndicator,
  selectTables,
} from '@hotel/orderapp/table/data-access';

@Component({
  selector: 'hotel-orderapp-table-feature-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-table-feature-selection.component.html',
  styleUrls: ['./orderapp-table-feature-selection.component.css'],
})
export class OrderappTableFeatureSelectionComponent {
  selectFloors$ = this.store.select(selectFloors);
  selectTableLoadIndicator$ = this.store.select(selectTableLoadingIndicator);
  selectTables$ = this.store.select(selectTables);
  selectedFloorId$ = this.store.select(selectSelectedFloorId);
  constructor(
    private store: Store,
    private dialogRef: DialogRef<OrderappTableFeatureSelectionComponent>
  ) {}

  selectTable(table: Table, customer: Customer, order: OrderSummary) {
    this.store.dispatch(
      setCartCreatedForUser({
        user: {
          firstName: table.name! + '-' + customer.firstName,
          userType: UserType.TABLE,
        },
        tableId: table.id,
        customerId: customer ? customer.id : 0,
        existingOrderId: order.id,
      })
    );

    this.dialogRef.close();
  }

  setTableForNewOrder(table: Table) {
    this.store.dispatch(
      setCartCreatedForUser({
        user: {
          firstName: table.name!.toString(),
          lastName: Math.ceil(Math.random() * 100).toString(),
          userType: UserType.TABLE,
        },
        tableId: table.id,
      })
    );

    this.dialogRef.close();
  }
  findTables(floorId: number) {
    this.store.dispatch(loadFloorTables({ floorId }));
  }
}
