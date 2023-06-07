import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectRecentOrders } from '@hotel/orderapp/order/data-access/order';

@Component({
  selector: 'hotel-orderapp-order-feature-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-order-feature-order-list.component.html',
  styleUrls: ['./orderapp-order-feature-order-list.component.css'],
})
export class OrderappOrderFeatureOrderListComponent {
  selectRecentOrders$ = this.store.select(selectRecentOrders);
  constructor(private store: Store) {}
}
