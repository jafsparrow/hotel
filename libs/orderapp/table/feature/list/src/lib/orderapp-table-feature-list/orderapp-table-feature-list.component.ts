import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  setCartCreatedByUser,
  setCartCreatedForUser,
} from '@hotel/orderapp/cart/data-access';
import { UserType } from '@hotel/orderapp/shared/data-access';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'hotel-orderapp-table-feature-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-table-feature-list.component.html',
  styleUrls: ['./orderapp-table-feature-list.component.css'],
})
export class OrderappTableFeatureListComponent {
  constructor(
    private store: Store,
    private dialogRef: DialogRef<OrderappTableFeatureListComponent>
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
