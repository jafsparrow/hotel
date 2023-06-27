import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import {
  addToCart,
  cartShortSummary,
  removeFromCart,
  selectCart,
  selectCartTaxed,
  selectCartTotal,
  updateCart,
} from '@hotel/orderapp/cart/data-access';
import { Cart, CartItem, Tax } from '@hotel/common/types';
import { deleteCartCreatedForUser } from '@hotel/orderapp/cart/data-access';
import {
  placeOrder,
  selectOrderSuccessMessage,
  selectPlaceOrderSpinner,
} from '@hotel/orderapp/order/data-access/order';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderappOrderFeatureProgressComponent } from '@hotel/orderapp/order/feature/progress';

@Component({
  selector: 'hotel-orderapp-cart-feature-cart-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule],
  templateUrl: './orderapp-cart-feature-cart-list.component.html',
  styleUrls: ['./orderapp-cart-feature-cart-list.component.css'],
})
export class OrderappCartFeatureCartListComponent {
  cart$ = this.store.select(selectCartTaxed);
  getTotalCartAmout$ = this.store.select(selectCartTotal);
  selectPlaceOrderSpinner$ = this.store.select(selectPlaceOrderSpinner);
  selectOrderSuccessMessage$ = this.store.select(selectOrderSuccessMessage);
  cartShortSummary$ = this.store.select(cartShortSummary);
  constructor(private store: Store, private dialog: MatDialog) {}

  getCartItems(cart: Cart) {
    // console.log('cart.cartItems', cart.cartItems);
    return Object.entries(cart.cartItems);
  }
  getTaxAppliedAmoutn(total: number, tax: Tax) {
    return tax.isPercentage ? total * 0.01 * tax.value : total + tax.value;
  }
  hasCartItems(cart: Cart): boolean {
    if (Object.keys(cart.cartItems).length) return true;
    return false;
  }

  clearCartUser() {
    if (confirm('Do you really want to clear cart user.')) {
      this.store.dispatch(deleteCartCreatedForUser());
    }
  }
  placeOrder(cart: Cart) {
    this.store.dispatch(placeOrder({ cart }));
    this.dialog.open(OrderappOrderFeatureProgressComponent, {
      disableClose: true,
      width: '100%',
    });
  }

  getCartItemTotal(cartItem: CartItem) {
    let productPrice = cartItem.variant
      ? cartItem.variant.price
      : cartItem.product.price;
    if (cartItem.modifiers) {
      productPrice =
        productPrice +
        cartItem.modifiers.reduce((prev, modifier) => prev + modifier.price, 0);
    }
    return (cartItem.count * productPrice).toFixed(3);
  }

  incrementCart(cartItem: CartItem, key: string) {
    const newCartItemWithOneQuantity = { ...cartItem, count: 1 };
    this.store.dispatch(addToCart({ item: newCartItemWithOneQuantity, key }));
  }

  decrimentCart(cartItem: CartItem) {
    this.store.dispatch(updateCart({ item: { ...cartItem, count: 1 } }));
  }
  clearCart(key: any, cartItem: CartItem) {
    // console.log('detaildsjfsdf', key);
    // console.log('detaildsjfsdf', cartItem);
    if (confirm(`Deleting ${cartItem.product.name} from cart.?`)) {
      this.store.dispatch(removeFromCart({ itemId: key }));
    }
  }
}
