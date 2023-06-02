import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectCartTotal,
  selectNumberOfItemsInCart,
} from '@hotel/orderapp/cart/data-access';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hotel-orderapp-cart-feature-cart-summary-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './orderapp-cart-feature-cart-summary-button.component.html',
  styleUrls: ['./orderapp-cart-feature-cart-summary-button.component.css'],
})
export class OrderappCartFeatureCartSummaryButtonComponent {
  cartCount$ = this.store.select(selectNumberOfItemsInCart);
  cartTotal$ = this.store.select(selectCartTotal);
  constructor(private store: Store) {}
}
