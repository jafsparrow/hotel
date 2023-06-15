import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { DialogRef } from '@angular/cdk/dialog';
import { setCartCreatedForUser } from '@hotel/orderapp/cart/data-access';
import { UserType } from '@hotel/common/types';
import {
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
  selectTableLoadIndicator$ = this.store.select(selectTableLoadingIndicator);
  selectTables$ = this.store.select(selectTables);
  constructor(
    private store: Store,
    private dialogRef: DialogRef<OrderappTableFeatureSelectionComponent>
  ) {}

  selectTable(tableId: number, customerId: number) {
    this.store.dispatch(
      setCartCreatedForUser({
        user: {
          firstName: tableId.toString(),
          userType: UserType.TABLE,
        },
        tableId: tableId,
        customerId: customerId ? customerId : 0,
      })
    );

    this.dialogRef.close();
  }
}
