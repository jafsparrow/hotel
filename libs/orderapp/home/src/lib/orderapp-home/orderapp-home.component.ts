import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappProductFeatureProductListComponent } from '@hotel/orderapp/product/feature/product-list';
import { OrderappProductFeatureQwikListComponent } from '@hotel/orderapp/product/feature/qwik-list';
import { OrderappProductFeatureCategoriesComponent } from '@hotel/orderapp/product/feature/categories';
import { OrderappProductFeatureSearchComponent } from '@hotel/orderapp/product/feature/search';
import { OrderappTableFeatureListComponent } from '@hotel/orderapp/table/feature/list';
import { OrderappOrderFeatureTakeAwayComponent } from '@hotel/orderapp/order/feature/take-away';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  deleteCartCreatedForUser,
  selectCartCreatedForUser,
} from '@hotel/orderapp/cart/data-access';

@Component({
  selector: 'hotel-orderapp-home',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    OrderappProductFeatureProductListComponent,
    OrderappProductFeatureQwikListComponent,
    OrderappProductFeatureCategoriesComponent,
    OrderappProductFeatureSearchComponent,
    OrderappTableFeatureListComponent,
    OrderappOrderFeatureTakeAwayComponent,
  ],
  templateUrl: './orderapp-home.component.html',
  styleUrls: ['./orderapp-home.component.css'],
})
export class OrderappHomeComponent {
  selectCartCreatedForUser$ = this.store.select(selectCartCreatedForUser);
  constructor(private dialog: MatDialog, private store: Store) {}

  openTable(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(OrderappTableFeatureListComponent, {
      width: '100%',
      height: '90%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openTakeAway(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(OrderappOrderFeatureTakeAwayComponent, {
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  clearCartUser() {
    if (confirm('Do you really want to clear cart user.')) {
      this.store.dispatch(deleteCartCreatedForUser());
    }
  }
}
