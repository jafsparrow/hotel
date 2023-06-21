import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappOrderFeatureOrderListComponent } from '@hotel/orderapp/order/feature/order-list';
import { OrderappOrderFeatureOrderDetailComponent } from '@hotel/orderapp/order/feature/order-detail';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { loadRecentOrders } from '@hotel/orderapp/order/data-access/order';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { logout } from '@hotel/orderapp/auth/data-access';

@Component({
  selector: 'hotel-orderapp-order-feature-page',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
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

  logout() {
    this.store.dispatch(logout());
  }
}
