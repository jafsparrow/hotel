import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderappSharedDataAccessComponent } from '@hotel/orderapp/shared/data-access';
import { provideEffects } from '@ngrx/effects';
import { ORDER_FEATURE_KEY, orderReducer } from './+state/orders.reducers';
import { OrderEffects } from './+state/orders.effects';

@Component({
  selector: 'hotel-orderapp-order-data-access-order',
  standalone: true,
  imports: [CommonModule, OrderappSharedDataAccessComponent],
  templateUrl: './orderapp-order-data-access-order.component.html',
  styleUrls: ['./orderapp-order-data-access-order.component.css'],
})
export class OrderappOrderDataAccessOrderComponent {}
