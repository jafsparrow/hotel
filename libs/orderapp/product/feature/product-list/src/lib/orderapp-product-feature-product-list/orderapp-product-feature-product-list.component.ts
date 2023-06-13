import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
// import { selectProductsCategoryVice } from '@hotel/orderapp/product/data-access';
import { CartItem, Product } from '@hotel/common/types';

import { OrderappProductFeatureModifierListComponent } from '@hotel/orderapp/product/feature/modifier-list';

import {
  addToCart,
  selectCartCountOfProduct,
  updateCart,
} from '@hotel/orderapp/cart/data-access';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderappOrderFeatureProductCountComponent } from '@hotel/orderapp/order/feature/product-count';
import { OrderappProductFeatureVariantListComponent } from '@hotel/orderapp/product/feature/variant-list';
import {
  selectAllProducts,
  selectFilteredCategoryViceProducts,
} from '@hotel/orderapp/product/data-access';

@Component({
  selector: 'hotel-orderapp-product-feature-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    OrderappProductFeatureModifierListComponent,
    OrderappProductFeatureVariantListComponent,
  ],
  templateUrl: './orderapp-product-feature-product-list.component.html',
  styleUrls: ['./orderapp-product-feature-product-list.component.css'],
})
export class OrderappProductFeatureProductListComponent {
  productscategory$ = this.store.select(selectFilteredCategoryViceProducts(''));

  constructor(private store: Store, private dialog: MatDialog) {}

  getKeys(data: any) {
    return Object.keys(data);
  }

  getProductsFromCategory(data: any, category: string) {
    return data[category];
  }

  whatBtnToDisplay(product: any) {
    if (product.variants?.length > 0) return 'variant';
    if (product.modifierGroup.length > 0) return 'modifiers';
    return 'add';
  }

  addToCart(product: Product) {
    const cartItem: CartItem = {
      product,
      count: 1,
      modifiers: [],
    };
    this.store.dispatch(
      addToCart({ item: cartItem, key: product.id.toString() })
    );
  }

  openCountEntryOrVariant(product: Product) {
    if (product.variants && product.variants.length > 0) {
      // open variant selection screen.
      this.openVariant(product);
    } else {
      this.openCountEntry(product);
    }
    console.log('hello');
    return '';
  }

  openVariant(product: Product) {
    return this.dialog.open(OrderappProductFeatureVariantListComponent, {
      width: '100%',
      data: { product },
    });
  }
  openCountEntry(product: Product) {
    return this.dialog.open(OrderappOrderFeatureProductCountComponent, {
      width: '100%',
      data: { product },
    });
  }

  openModifiers(product: Product) {
    return this.dialog.open(OrderappProductFeatureModifierListComponent, {
      width: '100vw',
      data: { product },
    });
  }
  getCurrentProductInCart(productId: string) {
    return this.store.select(selectCartCountOfProduct(productId));
  }

  incrementCart(product: Product) {
    const cartItem: CartItem = { product, count: 1, modifiers: [] };
    this.store.dispatch(
      addToCart({ item: cartItem, key: product.id.toString() })
    );
  }

  decrimentCart(product: Product) {
    const cartItem: CartItem = { product, count: 1, modifiers: [] };

    this.store.dispatch(updateCart({ item: cartItem }));
  }
}
