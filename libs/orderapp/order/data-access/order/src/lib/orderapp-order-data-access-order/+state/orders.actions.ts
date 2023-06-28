import {
  Cart,
  OrderItem,
  OrderItemStatus,
  OrderStatus,
  OrderSummary,
} from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const placeOrder = createAction(
  '[Order] place a new order',
  props<{ cart: Cart }>()
);

export const placeOrderTurnSpinnerOn = createAction(
  '[Order] place order spinner is On'
);

export const orderPlaceSuccess = createAction(
  '[Order] Order place success',
  props<{ successMessage: string }>()
);
export const orderPlaceFail = createAction(
  '[Order] order Place failed',
  props<{ errorMessage: string }>()
);

export const loadOrdersSpinnerOn = createAction(
  '[Order] Turn recent order loadspinner ON'
);
export const loadRecentOrders = createAction('[Order] Load recent orders');
export const loadRecentOrdersSuccess = createAction(
  '[Order] Load recent orders success',
  props<{ recentOrders: OrderSummary[] }>()
);
export const loadRecentOrdersFail = createAction(
  '[Order] Load recent orders failed',
  props<{ errorMessage: string }>()
);

export const loadOrderDetailSpinnerOn = createAction(
  '[Order] load order details from id'
);
export const loadOrderDetails = createAction(
  '[Order] load order details from id',
  props<{ orderId: number }>()
);

export const loadOrderDetailsSuccess = createAction(
  '[Order] load order details Success',
  props<{ order: OrderSummary }>()
);

export const loadOrderDetailsFailure = createAction(
  '[Order] load order details Failure',
  props<{ errorMessage: string }>()
);

export const updateOrderStatus = createAction(
  '[Order] update order status',
  props<{ orderId: string; status: OrderStatus }>()
);

export const updateOrderStatusSuccess = createAction(
  '[Order] update order status success',
  props<{ recentOrders: OrderSummary[] }>()
);

export const updateOrderStatusFail = createAction(
  '[Order] update order status failed',
  props<{ errorMessage: string }>()
);

export const updateOrderItemStatus = createAction(
  '[Order] update orderItem status',
  props<{
    orderId: string;
    orderItemKey: string;
    orderItemStatus: OrderItemStatus;
  }>()
);

export const updateOrderItemStatusSuccess = createAction(
  '[Order] update orderItem status success',
  props<{ recentOrders: OrderSummary[] }>()
);

export const updateOrderItemStatusFail = createAction(
  '[Order] update orderItem status faile',
  props<{ errorMessage: string }>()
);

export const updateSelectedFilteredCategories = createAction(
  '[Order] update the categries filter',
  props<{ filteredCategories: string[] }>()
);

export const pollRecentOrders = createAction(
  '[Order] Polling of orders in every 5 sec'
);

export const makeBillForOrder = createAction(
  '[Order] Create bill for the order',
  props<{ orderId: number }>()
);

export const makeBillForOrderSuccess = createAction(
  '[Order] Create bill for the order Success',
  props<{ updatedOrder: OrderSummary }>()
);

export const makeBillForOrderFail = createAction(
  '[Order] Create bill for the order Failed',
  props<{ errorMessage: string }>()
);

export const payTheOrder = createAction(
  '[Order] Make Payment for the order',
  props<{ orderId: number }>()
);

export const payTheOrderSuccess = createAction(
  '[Order] Make Payment ran successfully',
  props<{ updatedOrder: OrderSummary }>()
);

export const payTheOrderFail = createAction(
  '[Order] Make Payment Failed',
  props<{ errorMessage: string }>()
);

export const updateOrderItemCount = createAction(
  '[Order] Update Order Item Count',
  props<{ orderItem: OrderItem; count: number }>()
);

export const deleteItemFromOder = createAction(
  '[Order] Delete Item From Order',
  props<{ orderItem: OrderItem; count: number }>()
);
