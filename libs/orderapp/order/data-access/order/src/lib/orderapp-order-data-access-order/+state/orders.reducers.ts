import { createReducer, on } from '@ngrx/store';
import {
  deleteItemFromOder,
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
  updateOrderItemCount,
  updateSelectedFilteredCategories,
} from './orders.actions';
import { AppliedTaxInfo, OrderItem, OrderSummary } from '@hotel/common/types';
import { aggregateOrderItems } from '@hotel/common/util';

export const ORDER_FEATURE_KEY = 'order';

export interface Order {
  errorMessage: string;
  successMessage: string;
  recentOrders: OrderSummary[];
  selectedOrderDetails: OrderSummary | null;
  orderItemEdits: OrderItem[];
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
  orderItemEdits: [],
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
    // console.log(aggregateOrderItems(order.orderItems!));

    const { aggregated, totalAmount, totalQuantityCount, totalItemsCount } =
      aggregateOrderItems(order.orderItems!);

    // const agregatedOrderItemsArray = Object.values(
    //   aggregateOrderItems(order.orderItems!)
    // ) as unknown as OrderItem[];

    const newCopiedOrder: OrderSummary = {
      ...order,
      orderItems: aggregated,
      totalAmount,
      totalQuantityCount,
      totalItemsCount,
      appliedTaxes: [],
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
  })),
  on(updateOrderItemCount, (state, { orderItem }) => {
    const newState = {
      ...state,
      orderItemEdits: [...state.orderItemEdits, orderItem],
    };
    console.log(newState.orderItemEdits);
    return newState;
  }),
  on(deleteItemFromOder, (state, { orderItem }) => {
    // since order item edit array hold all the decrement or increment.
    // it should be deleted before process delete.
    // delete logic is to add negative currently available count from server.
    // this.is take from the selelcted order detail of the order state.

    const key = orderItem.customeKey;
    const tempOrderEdits = state.orderItemEdits.filter(
      (item) => item.customeKey != key
    );
    tempOrderEdits.push(orderItem);

    return {
      ...state,
      orderItemEdits: tempOrderEdits,
    };
  })
);
