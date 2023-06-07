import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Cart,
  OrderItemStatus,
  OrderStatus,
  OrderSummary,
} from '@hotel/orderapp/shared/data-access';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(
    private httpClient: HttpClient,
    @Inject('endPointURL') public apiUrl: string
  ) {}
  placeOrder(cart: Cart) {
    console.log('place order fucntion fired', cart);
    return this.httpClient.post(`${this.apiUrl}/orders`, cart);
  }

  getRecentOrders() {
    return this.httpClient.get(`${this.apiUrl}/orders`);
  }

  getOrderDetail(orderId: number) {
    return this.httpClient.post(`${this.apiUrl}/orders/item`, { orderId });
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
