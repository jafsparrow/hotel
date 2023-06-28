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
  payTheOrder,
  payTheOrderFail,
  payTheOrderSuccess,
  placeOrder,
  placeOrderTurnSpinnerOn,
  updateOrderItemCount,
  updateSelectedFilteredCategories,
} from './orders.actions';
import { AppliedTaxInfo, OrderItem, OrderSummary } from '@hotel/common/types';
import { aggregateOrderItems } from '@hotel/common/util';

export const ORDER_FEATURE_KEY = 'order';

export interface OrderItemEditItem {
  orderItem: OrderItem;
  count: number;
}
export interface Order {
  errorMessage: string;
  successMessage: string;
  recentOrders: OrderSummary[];
  selectedOrderDetails: OrderSummary | null;
  orderItemEdits: OrderItem[];
  orderItemEditObject: { [key: string]: OrderItemEditItem };
  placeOrderSpinner: boolean;
  loadOrderSpinner: boolean;
  loadOrderDetailSpinner: boolean;
  userSelectedFilterCategories: string[];
  makeBillForOrderSpinner: boolean;
  makeBillSuccessMessage: string;
  makeBillErrorMessage: string;
  payTheOrderSpinner: boolean;
  payTheOrderSuccessMessage: string;
  payTheOrderErrorMessage: string;
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
  orderItemEditObject: {},
  payTheOrderSpinner: false,
  payTheOrderSuccessMessage: '',
  payTheOrderErrorMessage: '',
};

export const orderReducer = createReducer(
  initialState,
  on(placeOrder, (state) => ({ ...state, placeOrderSpinner: true })),
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
    successMessage: '',
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
      orderItemEditObject: {},
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
  on(payTheOrder, (state, { orderId }) => ({
    ...state,
    payTheOrderSpinner: true,
    payTheOrderErrorMessage: '',
  })),
  on(payTheOrderSuccess, (state, { updatedOrder }) => ({
    ...state,
    selectedOrderDetails: updatedOrder,
    payTheOrderSpinner: false,
    payTheOrderSuccessMessage: `Order ${updatedOrder.id} printed Successfully`,
    payTheOrderErrorMessage: '',
  })),
  on(payTheOrderFail, (state, { errorMessage }) => ({
    ...state,
    payTheOrderErrorMessage: errorMessage,
    payTheOrderSpinner: false,
  })),
  on(updateOrderItemCount, (state, { orderItem, count }) => {
    // const newState = {
    //   ...state,
    //   orderItemEdits: [...state.orderItemEdits, orderItem],
    // };

    const tempOrderEditObje = { ...state.orderItemEditObject };
    const key = orderItem.customeKey!;
    tempOrderEditObje[key] = {
      ...(tempOrderEditObje[key] || {}),
      ...{
        orderItem,
        count: tempOrderEditObje[key]
          ? tempOrderEditObje[key].count + count
          : count,
      },
    };
    return { ...state, orderItemEditObject: tempOrderEditObje };
  }),
  on(deleteItemFromOder, (state, { orderItem, count }) => {
    // since order item edit array hold all the decrement or increment.
    // it should be deleted before process delete.
    // delete logic is to add negative currently available count from server.
    // this.is take from the selelcted order detail of the order state.

    const tempOrderEditObje = { ...state.orderItemEditObject };
    const key = orderItem.customeKey!;
    tempOrderEditObje[key] = {
      ...(tempOrderEditObje[key] || {}),
      ...{
        orderItem,
        count: count,
      },
    };
    return { ...state, orderItemEditObject: tempOrderEditObje };
  })
);
