import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Cart,
  OrderItemStatus,
  OrderStatus,
  OrderSummary,
} from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(
    private httpClient: HttpClient,
    @Inject('endPointURL') public apiUrl: string
  ) {}
  placeOrder(cart: Cart): Observable<OrderSummary> {
    console.log('place order fucntion fired', cart);
    return this.httpClient.post<OrderSummary>(`${this.apiUrl}/orders`, cart);
  }

  makeBillForOrder(orderId: number): Observable<OrderSummary> {
    console.log('making bill for th order', orderId);
    return this.httpClient.patch<OrderSummary>(`${this.apiUrl}/orders`, {
      orderId,
    });
  }

  payTheOrder(orderId: number): Observable<OrderSummary> {
    console.log('making bill for th order', orderId);
    return this.httpClient.get<OrderSummary>(
      `${this.apiUrl}/orders/pay/${orderId}`
    );
  }

  getRecentOrders() {
    return this.httpClient.get(`${this.apiUrl}/orders`);
  }

  getOrderDetail(orderId: number) {
    console.log('get order details workign');
    return this.httpClient.get<OrderSummary>(
      `${this.apiUrl}/orders/${orderId}`
    );
  }
  updateOrderStatus(orderId: string, status: OrderStatus) {
    return this.httpClient.put(`${this.apiUrl}/orders`, { orderId, status });
  }

  updateOrderItemStatus(
    orderId: string,
    orderItemKey: string,
    status: OrderItemStatus
  ): Observable<OrderSummary[]> {
    const updateData = {
      orderId,
      orderItemStatus: status,
      key: orderItemKey,
    };
    console.log('update data at service', updateData);
    return this.httpClient.patch<OrderSummary[]>(
      `${this.apiUrl}/orders`,
      updateData
    );
  }
}
