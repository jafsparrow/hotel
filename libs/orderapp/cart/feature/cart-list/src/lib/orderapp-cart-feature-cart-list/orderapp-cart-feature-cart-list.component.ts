import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import {
  addToCart,
  removeFromCart,
  selectCart,
  updateCart,
} from '@hotel/orderapp/cart/data-access';
import { Cart, CartItem } from '@hotel/common/types';
import { deleteCartCreatedForUser } from '@hotel/orderapp/cart/data-access';
import { placeOrder } from '@hotel/orderapp/order/data-access/order';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hotel-orderapp-cart-feature-cart-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './orderapp-cart-feature-cart-list.component.html',
  styleUrls: ['./orderapp-cart-feature-cart-list.component.css'],
})
export class OrderappCartFeatureCartListComponent {
  cart$ = this.store.select(selectCart);
  constructor(private store: Store) {}

  getCartItems(cart: Cart) {
    // console.log('cart.cartItems', cart.cartItems);
    return Object.entries(cart.cartItems);
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
  }

  incrementCart(cartItem: CartItem) {
    const newCartItemWithOneQuantity = { ...cartItem, count: 1 };
    this.store.dispatch(addToCart({ item: newCartItemWithOneQuantity }));
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
