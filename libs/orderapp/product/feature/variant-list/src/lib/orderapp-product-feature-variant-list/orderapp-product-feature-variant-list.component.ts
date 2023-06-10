import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Product, Variant } from '@hotel/common/types';
import { OrderappOrderFeatureProductCountComponent } from '@hotel/orderapp/order/feature/product-count';

@Component({
  selector: 'hotel-orderapp-product-feature-variant-list',
  standalone: true,
  imports: [CommonModule, OrderappOrderFeatureProductCountComponent],
  templateUrl: './orderapp-product-feature-variant-list.component.html',
  styleUrls: ['./orderapp-product-feature-variant-list.component.css'],
})
export class OrderappProductFeatureVariantListComponent {
  selectedProduct: Product;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,

    public dialogRef: MatDialogRef<OrderappProductFeatureVariantListComponent>,
    private store: Store,
    private dialog: MatDialog
  ) {
    this.selectedProduct = this.data['product'];
  }
  openCountEntry(variant: Variant) {
    //selectedVariant: Variant) {
    console.log('variant', variant);
    this.dialog.closeAll();
    return this.dialog.open(OrderappOrderFeatureProductCountComponent, {
      width: '100%',
      data: { product: this.selectedProduct, selectedVariant: variant },
    });
  }
}
