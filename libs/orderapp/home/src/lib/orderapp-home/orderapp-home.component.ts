import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappProductFeatureProductListComponent } from '@hotel/orderapp/product/feature/product-list';
import { OrderappProductFeatureQwikListComponent } from '@hotel/orderapp/product/feature/qwik-list';
import { OrderappProductFeatureCategoriesComponent } from '@hotel/orderapp/product/feature/categories';
import { OrderappProductFeatureSearchComponent } from '@hotel/orderapp/product/feature/search';
import { OrderappOrderFeatureTakeAwayComponent } from '@hotel/orderapp/order/feature/take-away';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  deleteCartCreatedForUser,
  selectCartCreatedForUser,
} from '@hotel/orderapp/cart/data-access';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { loadProducts } from '@hotel/orderapp/product/data-access';
import { loadCategories } from '@hotel/orderapp/category/data-access';
import { OrderappCartFeatureCartSummaryButtonComponent } from '@hotel/orderapp/cart/feature/cart-summary-button';
import { OrderappTableFeatureSelectionComponent } from '@hotel/orderapp/table/feature/selection';

@Component({
  selector: 'hotel-orderapp-home',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule,
    OrderappProductFeatureProductListComponent,
    OrderappProductFeatureQwikListComponent,
    OrderappProductFeatureCategoriesComponent,
    OrderappProductFeatureSearchComponent,
    OrderappOrderFeatureTakeAwayComponent,
    OrderappCartFeatureCartSummaryButtonComponent,
  ],
  templateUrl: './orderapp-home.component.html',
  styleUrls: ['./orderapp-home.component.css'],
})
export class OrderappHomeComponent {
  selectCartCreatedForUser$ = this.store.select(selectCartCreatedForUser);
  constructor(private dialog: MatDialog, private store: Store) {
    this.store.dispatch(loadProducts());
    this.store.dispatch(loadCategories());
  }

  openTable(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(OrderappTableFeatureSelectionComponent, {
      width: '100vw',
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
