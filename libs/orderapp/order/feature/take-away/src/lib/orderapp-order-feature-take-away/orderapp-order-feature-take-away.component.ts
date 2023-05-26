import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserType } from '@hotel/orderapp/shared/data-access';
import { Store } from '@ngrx/store';
import { setCartCreatedForUser } from '@hotel/orderapp/cart/data-access';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hotel-orderapp-order-feature-take-away',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-order-feature-take-away.component.html',
  styleUrls: ['./orderapp-order-feature-take-away.component.css'],
})
export class OrderappOrderFeatureTakeAwayComponent {
  constructor(
    private store: Store,
    private dialogRef: MatDialogRef<OrderappOrderFeatureTakeAwayComponent>
  ) {}
  customerName = '';
  otherDetails = '';

  setTheUserToCart() {
    const user: User = {
      firstName: 'Hameed',
      lastName: 'Car 1022',
      userType: UserType.TAKEAWAY,
    };

    this.store.dispatch(setCartCreatedForUser({ user }));
    this.dialogRef.close();
  }
}
