import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappOrderFeatureOrderListComponent } from '@hotel/orderapp/order/feature/order-list';
import { OrderappOrderFeatureOrderDetailComponent } from '@hotel/orderapp/order/feature/order-detail';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { loadRecentOrders } from '@hotel/orderapp/order/data-access/order';

@Component({
  selector: 'hotel-orderapp-order-feature-page',
  standalone: true,
  imports: [
    CommonModule,
    OrderappOrderFeatureOrderListComponent,
    OrderappOrderFeatureOrderDetailComponent,
    MatDialogModule,
  ],
  templateUrl: './orderapp-order-feature-page.component.html',
  styleUrls: ['./orderapp-order-feature-page.component.css'],
})
export class OrderappOrderFeaturePageComponent {
  constructor(private dialog: MatDialog, private store: Store) {
    console.log('consturcur of order feature pagen');
    this.store.dispatch(loadRecentOrders());
  }
  openOrdersDialog() {
    console.log('open dialog clicked');
    this.dialog.open(OrderappOrderFeatureOrderListComponent, {
      height: '100vh',
      width: '100vw',
    });
  }
}
