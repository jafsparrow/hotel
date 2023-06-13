import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserType } from '@hotel/orderapp/shared/data-access';
import { Store } from '@ngrx/store';
import { setCartCreatedForUser } from '@hotel/orderapp/cart/data-access';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'hotel-orderapp-order-feature-take-away',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-order-feature-take-away.component.html',
  styleUrls: ['./orderapp-order-feature-take-away.component.css'],
})
export class OrderappOrderFeatureTakeAwayComponent {
  takeAwayForm: FormGroup = new FormGroup({
    customerName: new FormControl('', Validators.required),
    otherDetails: new FormControl(''),
  });
  constructor(
    private store: Store,
    private dialogRef: MatDialogRef<OrderappOrderFeatureTakeAwayComponent>
  ) {}

  setTheUserToCart() {
    const user: User = {
      firstName: this.takeAwayForm.value.customerName,
      lastName: this.takeAwayForm.value.otherDetails,
      userType: UserType.TAKEAWAY,
    };

    console.log(this.takeAwayForm.value);

    this.store.dispatch(setCartCreatedForUser({ user }));
    this.dialogRef.close();
  }
}
