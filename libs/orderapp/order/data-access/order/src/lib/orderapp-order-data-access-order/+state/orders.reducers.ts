import { createReducer, on } from '@ngrx/store';
import {
  loadOrdersSpinnerOn,
  loadRecentOrders,
  loadRecentOrdersFail,
  loadRecentOrdersSuccess,
  orderPlaceFail,
  orderPlaceSuccess,
  placeOrderTurnSpinnerOn,
  updateSelectedFilteredCategories,
} from './orders.actions';
import { OrderSummary } from '@hotel/common/types';

export const ORDER_FEATURE_KEY = 'order';

export interface Order {
  errorMessage: string;
  recentOrders: OrderSummary[];
  selectedOrderDetails: OrderSummary | null;
  placeOrderSpinner: boolean;
  loadOrderSpinner: boolean;
  loadOrderDetailSpinner: boolean;
  userSelectedFilterCategories: string[];
}

const initialState: Order = {
  recentOrders: [],
  errorMessage: '',
  placeOrderSpinner: false,
  loadOrderDetailSpinner: false,
  loadOrderSpinner: false,
  userSelectedFilterCategories: [],
  selectedOrderDetails: null,
};

export const orderReducer = createReducer(
  initialState,

  on(orderPlaceSuccess, (state) => {
    return { ...state, errorMessage: '', placeOrderSpinner: false };
  }),
  on(orderPlaceFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    placeOrderSpinner: false,
  })),
  on(placeOrderTurnSpinnerOn, (state) => ({
    ...state,
    placeOrderSpinner: true,
  })),
  on(loadOrdersSpinnerOn, (state) => ({ ...state, loadOrderSpinner: true })),
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
  }))
);
