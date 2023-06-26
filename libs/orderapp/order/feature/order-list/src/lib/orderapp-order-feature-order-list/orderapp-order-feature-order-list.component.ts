import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  loadOrderDetails,
  selectOrderDetailsOfSelectedOrder,
  selectRecentOrders,
} from '@hotel/orderapp/order/data-access/order';
import { OrderSummary } from '@hotel/common/types';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderappCoreComponent, TimesagoPipe } from '@hotel/orderapp/core';
import { OrderappOrderFeatureOrderDetailComponent } from '@hotel/orderapp/order/feature/order-detail';
import { OrderappOrderFeatureOrderDetailEditComponent } from '@hotel/orderapp/order/feature/order-detail-edit';

@Component({
  selector: 'hotel-orderapp-order-feature-order-list',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    TimesagoPipe,
    OrderappOrderFeatureOrderDetailComponent,
    OrderappOrderFeatureOrderDetailEditComponent,
  ],
  templateUrl: './orderapp-order-feature-order-list.component.html',
  styleUrls: ['./orderapp-order-feature-order-list.component.css'],
})
export class OrderappOrderFeatureOrderListComponent {
  selectRecentOrders$ = this.store.select(selectRecentOrders);
  selectedOrderDetailsOfSelectedOrder$ = this.store.select(
    selectOrderDetailsOfSelectedOrder
  );
  constructor(private store: Store, private dialog: MatDialog) {}

  loadOrderDetail(order: OrderSummary) {
    console.log(order);

    this.dialog.closeAll();
    this.store.dispatch(loadOrderDetails({ orderId: order.id }));
  }

  openOrderDetail(order: OrderSummary) {
    console.log('open dialog clicked');
    this.loadOrderDetail(order);
    this.dialog.open(OrderappOrderFeatureOrderDetailComponent, {
      height: '100vh',
      width: '100vw',
    });
  }

  openOrderDetailEdit(order: OrderSummary) {
    console.log('orderdetail edit opened'), this.loadOrderDetail(order);
    this.dialog.open(OrderappOrderFeatureOrderDetailEditComponent, {
      height: '100%',
      width: '100%',
    });
  }
}
