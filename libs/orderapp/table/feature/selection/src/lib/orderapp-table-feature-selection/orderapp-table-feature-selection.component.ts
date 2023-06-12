import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { DialogRef } from '@angular/cdk/dialog';
import { setCartCreatedForUser } from '@hotel/orderapp/cart/data-access';
import { UserType } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-table-feature-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-table-feature-selection.component.html',
  styleUrls: ['./orderapp-table-feature-selection.component.css'],
})
export class OrderappTableFeatureSelectionComponent {
  constructor(
    private store: Store,
    private dialogRef: DialogRef<OrderappTableFeatureSelectionComponent>
  ) {}
  selectTable(tableNumber: number) {
    this.store.dispatch(
      setCartCreatedForUser({
        user: {
          firstName: tableNumber.toString(),
          userType: UserType.TABLE,
        },
      })
    );

    this.dialogRef.close();
  }
}
