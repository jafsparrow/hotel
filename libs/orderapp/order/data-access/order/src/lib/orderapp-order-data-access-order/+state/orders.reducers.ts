import { createReducer, on } from '@ngrx/store';
import {
  loadOrderDetailSpinnerOn,
  loadOrderDetailsSuccess,
  loadOrdersSpinnerOn,
  loadRecentOrders,
  loadRecentOrdersFail,
  loadRecentOrdersSuccess,
  makeBillForOrder,
  makeBillForOrderFail,
  makeBillForOrderSuccess,
  orderPlaceFail,
  orderPlaceSuccess,
  placeOrderTurnSpinnerOn,
  updateSelectedFilteredCategories,
} from './orders.actions';
import { OrderItem, OrderSummary } from '@hotel/common/types';
import { aggregateOrderItems } from '@hotel/common/util';

export const ORDER_FEATURE_KEY = 'order';

export interface Order {
  errorMessage: string;
  successMessage: string;
  recentOrders: OrderSummary[];
  selectedOrderDetails: OrderSummary | null;
  placeOrderSpinner: boolean;
  loadOrderSpinner: boolean;
  loadOrderDetailSpinner: boolean;
  userSelectedFilterCategories: string[];
  makeBillForOrderSpinner: boolean;
  makeBillSuccessMessage: string;
  makeBillErrorMessage: string;
}

const initialState: Order = {
  recentOrders: [],
  errorMessage: '',
  successMessage: '',
  placeOrderSpinner: false,
  loadOrderDetailSpinner: false,
  loadOrderSpinner: false,
  makeBillForOrderSpinner: false,
  makeBillSuccessMessage: '',
  makeBillErrorMessage: '',
  userSelectedFilterCategories: [],
  selectedOrderDetails: null,
};

export const orderReducer = createReducer(
  initialState,

  on(orderPlaceSuccess, (state, { successMessage }) => {
    return {
      ...state,
      errorMessage: '',
      placeOrderSpinner: false,
      successMessage,
    };
  }),
  on(orderPlaceFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    placeOrderSpinner: false,
  })),
  on(placeOrderTurnSpinnerOn, (state) => ({
    ...state,
    placeOrderSpinner: true,
    successMessage: '',
    errorMessage: '',
  })),
  on(loadOrdersSpinnerOn, (state) => ({ ...state, loadOrderSpinner: true })),
  on(loadOrderDetailSpinnerOn, (state) => ({
    ...state,
    loadOrderDetailSpinner: true,
  })),
  on(loadOrderDetailsSuccess, (state, { order }) => {
    console.log(aggregateOrderItems(order.orderItems!));

    const agregatedOrderItemsArray = Object.values(
      aggregateOrderItems(order.orderItems!)
    ) as unknown as OrderItem[];

    const newCopiedOrder = {
      ...order,
      orderItems: agregatedOrderItemsArray,
    };
    return {
      ...state,
      selectedOrderDetails: newCopiedOrder,
      loadOrderDetailSpinner: false,
    };
  }),
  on(loadRecentOrders, (state) => ({
    ...state,
    loadOrderSpinner: false,
    errorMessage: '',
  })),
  on(loadRecentOrdersSuccess, (state, { recentOrders }) => ({
    ...state,
    loadOrderSpinner: false,
    recentOrders,
  })),
  on(loadRecentOrdersFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    loadOrderSpinner: false,
  })),
  on(updateSelectedFilteredCategories, (state, { filteredCategories }) => ({
    ...state,
    userSelectedFilterCategories: filteredCategories,
  })),
  on(makeBillForOrder, (state, { orderId }) => ({
    ...state,
    makeBillForOrderSpinner: true,
    makeBillErrorMessage: '',
  })),
  on(makeBillForOrderSuccess, (state, { updatedOrder }) => ({
    ...state,
    selectedOrderDetails: updatedOrder,
    makeBillForOrderSpinner: false,
    makeBillSuccessMessage: `Order ${updatedOrder.id} printed Successfully`,
    makeBillErrorMessage: '',
  })),
  on(makeBillForOrderFail, (state, { errorMessage }) => ({
    ...state,
    makeBillErrorMessage: errorMessage,
    makeBillForOrderSpinner: false,
  }))
);
