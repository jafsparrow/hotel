import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  CartItem,
  CountSelectionDialogData,
  Product,
} from '@hotel/orderapp/shared/data-access';
import { addToCart } from '@hotel/orderapp/cart/data-access';

@Component({
  selector: 'hotel-orderapp-order-feature-product-count',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './orderapp-order-feature-product-count.component.html',
  styleUrls: ['./orderapp-order-feature-product-count.component.css'],
})
export class OrderappOrderFeatureProductCountComponent {
  selectedProduct: Product;
  defaultCount = 1;
  isPrestine = true;
  currentCount = 1;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CountSelectionDialogData,

    public dialogRef: MatDialogRef<OrderappOrderFeatureProductCountComponent>,
    private store: Store
  ) {
    this.selectedProduct = this.data['product'];
  }

  buttonClick(buttonNumber: number) {
    console.log(buttonNumber);
    let newCountString = '';
    if (this.isPrestine) {
      newCountString = buttonNumber.toString();
    } else {
      newCountString = this.currentCount
        .toString()
        .concat(buttonNumber.toString());
      console.log(newCountString);
    }

    this.isPrestine = false;
    this.currentCount = +newCountString;
  }

  clearCount() {
    this.isPrestine = true;
    this.currentCount = this.defaultCount;
  }

  backSpaceCount() {
    if (this.currentCount < 10) {
      // this.isPrestine = true;
      this.currentCount = this.defaultCount;
    } else {
      this.currentCount = +this.currentCount.toString().slice(0, -1);
    }
  }

  addToCart() {
    console.log(this.selectedProduct);
    const cartItem: CartItem = {
      count: this.currentCount,
      product: this.selectedProduct,
      modifiers: [],
    };

    this.store.dispatch(addToCart({ item: cartItem }));
    this.dialogRef.close();
  }
}
