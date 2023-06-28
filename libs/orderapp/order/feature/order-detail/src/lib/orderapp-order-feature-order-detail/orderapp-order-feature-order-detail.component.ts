import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { OrderappOrderFeaturePrintProgressComponent } from '@hotel/orderapp/order/feature/print-progress';
import {
  makeBillForOrder,
  payTheOrder,
  selectLoadOrderDetailSpinner,
  selectMakeBillSpinner,
  selectOrderDetailsOfSelectedOrder,
  selectPayTheOrderSpinner,
} from '@hotel/orderapp/order/data-access/order';
import { OrderSummary } from '@hotel/common/types';
import { TimesagoPipe } from '@hotel/orderapp/core';

@Component({
  selector: 'hotel-orderapp-order-feature-order-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    OrderappOrderFeaturePrintProgressComponent,
    TimesagoPipe,
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

  selectMakeBillSpinner$ = this.store.select(selectMakeBillSpinner);
  selectPayTheOrderSpinner$ = this.store.select(selectPayTheOrderSpinner);
  constructor(private store: Store, private dialog: MatDialog) {}

  makeBillForOrder(selectedOrder: OrderSummary) {
    console.log('clicked makebill button');
    this.store.dispatch(makeBillForOrder({ orderId: selectedOrder.id }));

    this.dialog.open(OrderappOrderFeaturePrintProgressComponent, {
      width: '100%',
    });
  }

  makePayment(order: OrderSummary) {
    this.store.dispatch(payTheOrder({ orderId: order.id }));
  }
  printBill(order: OrderSummary) {
    console.log('clicked printbill button');
    this.store.dispatch(makeBillForOrder({ orderId: order.id }));
  }
}
