import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductQwikviewComponent } from '@hotel/orderapp/ui';
import {
  OrderappProductDataAccessComponent,
  selectAllProducts,
} from '@hotel/orderapp/product/data-access';
import { Store } from '@ngrx/store';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Product } from '@hotel/orderapp/shared/data-access';

import { OrderappOrderFeatureProductCountComponent } from '@hotel/orderapp/order/feature/product-count';

@Component({
  selector: 'hotel-orderapp-product-feature-qwik-list',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    ProductQwikviewComponent,
    OrderappProductDataAccessComponent,
  ],
  templateUrl: './orderapp-product-feature-qwik-list.component.html',
  styleUrls: ['./orderapp-product-feature-qwik-list.component.css'],
})
export class OrderappProductFeatureQwikListComponent {
  selectQwikProducts = this.store.select(selectAllProducts);
  constructor(private store: Store, private dialog: MatDialog) {}

  countEntry(product: Product) {
    return this.dialog.open(OrderappOrderFeatureProductCountComponent, {
      width: '100%',
      data: { product },
    });
  }
}
