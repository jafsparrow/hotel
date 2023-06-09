import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, CartItem } from '@hotel/common/types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  CART: Cart = {
    cartItems: {},
    placeOrderSpinner: false,
  };
  constructor(private httpClient: HttpClient) {}

  loadCart(): Observable<Cart> {
    return of(this.CART);
  }
}
