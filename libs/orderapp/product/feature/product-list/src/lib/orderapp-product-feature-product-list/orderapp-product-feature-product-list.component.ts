import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
// import { selectProductsCategoryVice } from '@hotel/orderapp/product/data-access';
import { CartItem, Product } from '@hotel/orderapp/shared/data-access';

import {
  addToCart,
  selectCartCountOfProduct,
  updateCart,
} from '@hotel/orderapp/cart/data-access';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderappOrderFeatureProductCountComponent } from '@hotel/orderapp/order/feature/product-count';
import {
  selectAllProducts,
  selectFilteredCategoryViceProducts,
} from '@hotel/orderapp/product/data-access';

@Component({
  selector: 'hotel-orderapp-product-feature-product-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
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
    if (product.modifiers?.length > 0) return 'modifiers';
    return 'add';
  }

  addToCart(product: Product) {
    const cartItem: CartItem = { product, count: 1, modifiers: [] };
    this.store.dispatch(addToCart({ item: cartItem }));
  }

  openCountEntry(product: Product) {
    return this.dialog.open(OrderappOrderFeatureProductCountComponent, {
      width: '100%',
      data: { product },
    });
  }

  getCurrentProductInCart(productId: string) {
    return this.store.select(selectCartCountOfProduct(productId));
  }

  incrementCart(product: Product) {
    const cartItem: CartItem = { product, count: 1, modifiers: [] };
    this.store.dispatch(addToCart({ item: cartItem }));
  }

  decrimentCart(product: Product) {
    const cartItem: CartItem = { product, count: 1, modifiers: [] };

    this.store.dispatch(updateCart({ item: cartItem }));
  }
}
