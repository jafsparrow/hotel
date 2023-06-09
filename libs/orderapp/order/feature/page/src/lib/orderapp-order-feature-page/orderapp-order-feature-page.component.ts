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
import { OrderappOrderFeatureOrderDetailEditComponent } from '@hotel/orderapp/order/feature/order-detail-edit';
import { TimesagoPipe } from '@hotel/orderapp/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'hotel-orderapp-order-feature-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    OrderappOrderFeatureOrderDetailEditComponent,
    OrderappOrderFeatureOrderListComponent,
    OrderappOrderFeatureOrderDetailComponent,
    MatDialogModule,
    TimesagoPipe,
  ],
  templateUrl: './orderapp-order-feature-page.component.html',
  styleUrls: ['./orderapp-order-feature-page.component.css'],
})
export class OrderappOrderFeaturePageComponent {
  constructor(
    private dialog: MatDialog,
    private store: Store,

    private router: Router
  ) {
    console.log('consturcur of order feature pagen');
    this.store.dispatch(loadRecentOrders());
  }
  // openOrdersDialog() {
  //   console.log('open dialog clicked');
  //   this.dialog.open(OrderappOrderFeatureOrderListComponent, {
  //     height: '100vh',
  //     width: '100vw',
  //   });
  // }

  logout() {
    this.store.dispatch(logout());
  }
  goToShellPage() {
    this.router.navigate(['shell']);
  }
}
