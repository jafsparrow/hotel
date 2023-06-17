import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { OrderappOrderFeaturePrintProgressComponent } from '@hotel/orderapp/order/feature/print-progress';
import {
  makeBillForOrder,
  selectLoadOrderDetailSpinner,
  selectOrderDetailsOfSelectedOrder,
} from '@hotel/orderapp/order/data-access/order';
import { OrderSummary } from '@hotel/common/types';

@Component({
  selector: 'hotel-orderapp-order-feature-order-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    OrderappOrderFeaturePrintProgressComponent,
  ],
  templateUrl: './orderapp-order-feature-order-detail.component.html',
  styleUrls: ['./orderapp-order-feature-order-detail.component.css'],
})
export class OrderappOrderFeatureOrderDetailComponent {
  selectOrderDetailsLoadSpinner$ = this.store.select(
    selectLoadOrderDetailSpinner
  );
  selectOrderDetailsOfSelectedOrder$ = this.store.select(
    selectOrderDetailsOfSelectedOrder
  );
  constructor(private store: Store, private dialog: MatDialog) {}

  makeBillForOrder(selectedOrder: OrderSummary) {
    this.store.dispatch(makeBillForOrder({ orderId: selectedOrder.id }));
    this.dialog.open(OrderappOrderFeaturePrintProgressComponent, {
      width: '100%',
    });
  }

  makePayment(order: OrderSummary) {
    return 'hello';
  }
  printBill(order: OrderSummary) {
    return 'hello';
  }
}
