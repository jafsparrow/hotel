import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllProducts } from '@hotel/orderapp/product/data-access';
import { OrderappProductFeatureAddComponent } from '@hotel/orderapp/product/feature/add';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Product } from '@hotel/common/types';
@Component({
  selector: 'hotel-orderapp-product-feature-admin-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, OrderappProductFeatureAddComponent],
  templateUrl: './orderapp-product-feature-admin-list.component.html',
  styleUrls: ['./orderapp-product-feature-admin-list.component.css'],
})
export class OrderappProductFeatureAdminListComponent {
  constructor(private store: Store, private dialog: MatDialog) {}
  selectProducts$ = this.store.select(selectAllProducts);

  addProduct() {
    this.dialog.open(OrderappProductFeatureAddComponent, {});
  }

  editProduct(product: Product) {
    this.dialog.open(OrderappProductFeatureAddComponent, { data: { product } });
  }
}
