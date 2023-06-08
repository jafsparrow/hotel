import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectLoadOrderDetailSpinner,
  selectOrderDetailsOfSelectedOrder,
} from '@hotel/orderapp/order/data-access/order';

@Component({
  selector: 'hotel-orderapp-order-feature-order-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderapp-order-feature-order-detail.component.html',
  styleUrls: ['./orderapp-order-feature-order-detail.component.css'],
})
export class OrderappOrderFeatureOrderDetailComponent {
  selectOrderDetailsLoadSpinner$ = this.store.select(
    selectLoadOrderDetailSpinner
  );
  selectOrderDetailsOfSelectedOrder$ = this.store.select(
    selectOrderDetailsOfSelectedOrder
  );
  constructor(private store: Store) {}
}
