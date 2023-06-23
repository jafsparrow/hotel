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
  cartShortSummary,
  deleteCartCreatedForUser,
  selectCartCreatedForUser,
} from '@hotel/orderapp/cart/data-access';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { loadProducts } from '@hotel/orderapp/product/data-access';
import { loadCategories } from '@hotel/orderapp/category/data-access';
import { OrderappCartFeatureCartSummaryButtonComponent } from '@hotel/orderapp/cart/feature/cart-summary-button';
import { OrderappTableFeatureSelectionComponent } from '@hotel/orderapp/table/feature/selection';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { OrderappAuthFeatureSignedUserDetailComponent } from '@hotel/orderapp/auth/feature/signed-user-detail';
import {
  loadFloorTables,
  loadFloors,
  loadTables,
} from '@hotel/orderapp/table/data-access';
import { logout } from '@hotel/orderapp/auth/data-access';

@Component({
  selector: 'hotel-orderapp-home',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    OrderappProductFeatureProductListComponent,
    OrderappProductFeatureQwikListComponent,
    OrderappProductFeatureCategoriesComponent,
    OrderappProductFeatureSearchComponent,
    OrderappOrderFeatureTakeAwayComponent,
    OrderappCartFeatureCartSummaryButtonComponent,
    OrderappAuthFeatureSignedUserDetailComponent,
  ],
  templateUrl: './orderapp-home.component.html',
  styleUrls: ['./orderapp-home.component.css'],
})
export class OrderappHomeComponent {
  selectCartCreatedForUser$ = this.store.select(selectCartCreatedForUser);
  cartShortSummary$ = this.store.select(cartShortSummary);
  constructor(
    private dialog: MatDialog,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.store.dispatch(loadProducts());
    this.store.dispatch(loadCategories());
    this.store.dispatch(loadFloors());
    this.store.dispatch(loadFloorTables({ floorId: 1 }));
  }

  navigateTo(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
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

  logout() {
    return this.store.dispatch(logout());
  }

  goToShellPage() {
    this.router.navigate(['shell']);
  }
}
