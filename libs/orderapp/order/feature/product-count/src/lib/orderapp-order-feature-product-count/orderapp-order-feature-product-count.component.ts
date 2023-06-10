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
  Modifier,
  Product,
  Variant,
} from '@hotel/common/types';

import { OrderappProductFeatureModifierListComponent } from '@hotel/orderapp/product/feature/modifier-list';
import { addToCart } from '@hotel/orderapp/cart/data-access';

@Component({
  selector: 'hotel-orderapp-order-feature-product-count',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    OrderappProductFeatureModifierListComponent,
  ],
  templateUrl: './orderapp-order-feature-product-count.component.html',
  styleUrls: ['./orderapp-order-feature-product-count.component.css'],
})
export class OrderappOrderFeatureProductCountComponent {
  selectedProduct: Product;
  selectedVariant: Variant | null = null;
  defaultCount = 1;
  isPrestine = true;
  currentCount = 1;
  selectedModifiers: Modifier[] = [];
  generatedKey = '';
  initialKey = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CountSelectionDialogData,

    public dialogRef: MatDialogRef<OrderappOrderFeatureProductCountComponent>,
    private store: Store
  ) {
    this.selectedProduct = this.data['product'];
    this.selectedVariant = this.data['selectedVariant'] ?? null;
    if (this.selectedVariant) {
      this.initialKey = this.selectedProduct.id + '-' + this.selectedVariant.id;
    } else {
      this.initialKey = this.selectedProduct.id.toString();
    }
    this.generatedKey = this.initialKey;
    console.log('vaiant', this.initialKey);
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
      modifiers: this.selectedModifiers,
    };

    this.store.dispatch(addToCart({ item: cartItem, key: this.generatedKey }));
    this.dialogRef.close();
  }

  modifierSelectionChange($event: { [key: number]: Modifier }) {
    // when product variant are done .. need incorporate that too
    let key = '';

    const selectedModifiers: Modifier[] = [];
    Object.entries($event).forEach((itemArr) => {
      key = key + '-' + itemArr[0] + '-' + itemArr[1].id;
      selectedModifiers.push(itemArr[1]);
    });
    this.selectedModifiers = selectedModifiers;
    console.log('key is ', key);
    if (this.selectedVariant) {
      this.generatedKey = this.initialKey + '-' + this.selectedVariant.id + key;
    } else {
      this.generatedKey = this.initialKey + key;
    }
    console.log('selection chagned data', this.generatedKey);
  }
}
