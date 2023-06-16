import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectOrderErrorMessage,
  selectOrderSuccessMessage,
  selectPlaceOrderSpinner,
} from '@hotel/orderapp/order/data-access/order';
import { clearCart } from '@hotel/orderapp/cart/data-access';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'hotel-orderapp-order-feature-progress',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './orderapp-order-feature-progress.component.html',
  styleUrls: ['./orderapp-order-feature-progress.component.css'],
})
export class OrderappOrderFeatureProgressComponent {
  selectPlaceOrderSpinner$ = this.store.select(selectPlaceOrderSpinner);
  selectOrderSuccessMessage$ = this.store.select(selectOrderSuccessMessage);
  selectOrderErrorMessage$ = this.store.select(selectOrderErrorMessage);

  constructor(
    private store: Store,
    private router: Router,
    private dialog: MatDialog
  ) {}

  goToNextOrder() {
    // clear cart.
    this.store.dispatch(clearCart());
    // clear order messages.
    // go to homepage.
    this.dialog.closeAll();
    this.router.navigate(['shell', 'home']);
  }

  tryAgainBtn() {
    return 'try';
  }
}
