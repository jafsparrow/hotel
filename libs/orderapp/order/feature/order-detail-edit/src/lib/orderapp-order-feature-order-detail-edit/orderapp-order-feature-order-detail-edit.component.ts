import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  deleteItemFromOder,
  makeBillForOrder,
  selectLoadOrderDetailSpinner,
  selectOrderDetailEdited,
  selectOrderDetailsOfSelectedOrder,
  updateOrderItemCount,
} from '@hotel/orderapp/order/data-access/order';
import { OrderItem, OrderSummary } from '@hotel/common/types';
import { TimesagoPipe } from '@hotel/orderapp/core';
import { OrderappOrderFeaturePrintProgressComponent } from '@hotel/orderapp/order/feature/print-progress';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hotel-orderapp-order-feature-order-edit',
  standalone: true,
  imports: [CommonModule, TimesagoPipe, MatDialogModule, RouterModule],
  templateUrl: './orderapp-order-feature-order-detail-edit.component.html',
  styleUrls: ['./orderapp-order-feature-order-detail-edit.component.css'],
})
export class OrderappOrderFeatureOrderDetailEditComponent {
  selectOrderDetailsLoadSpinner1$ = this.store.select(
    selectLoadOrderDetailSpinner
  );
  selectOrderDetailsOfSelectedOrder$ = this.store.select(
    selectOrderDetailsOfSelectedOrder
  );
  selectOrderForEdit$ = this.store.select(selectOrderDetailEdited);
  constructor(private store: Store, private dialog: MatDialog) {}

  deleteFromOrder(orignalOrder: OrderSummary, item: OrderItem) {
    // console.log('detaildsjfsdf', key);
    // console.log('detaildsjfsdf', cartItem);
    const originalOrderItem = orignalOrder.orderItems!.filter(
      (orderItem) => orderItem.customeKey == item.customeKey
    )[0];

    const originalCountFromServer = originalOrderItem.count;
    if (confirm(`Deleting ${item.name} from order.?`)) {
      this.store.dispatch(
        deleteItemFromOder({
          orderItem: { ...item, count: -originalCountFromServer },
        })
      );
      console.log('delete pressed.');
    }
  }
  decrimentItem(item: OrderItem) {
    const currentCount = item.count;
    if (currentCount - 1 <= 0) return;
    this.store.dispatch(
      updateOrderItemCount({ orderItem: { ...item, count: -1 } })
    );
    console.log('decrement');
  }

  incrementItem(item: OrderItem) {
    this.store.dispatch(
      updateOrderItemCount({ orderItem: { ...item, count: 1 } })
    );
    console.log('increment');
  }

  makeBillForOrder(selectedOrder: OrderSummary) {
    console.log('clicked makebill button');
    this.store.dispatch(makeBillForOrder({ orderId: selectedOrder.id }));

    this.dialog.open(OrderappOrderFeaturePrintProgressComponent, {
      width: '100%',
    });
  }

  makePayment(order: OrderSummary) {
    return 'hello';
  }
  printBill(order: OrderSummary) {
    console.log('clicked printbill button');
    this.store.dispatch(makeBillForOrder({ orderId: order.id }));
    return 'hello';
  }

  updateOrder() {
    console.log('updating order');
  }
}
