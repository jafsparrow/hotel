import { createReducer, on } from '@ngrx/store';
import {
  loadRecentOrders,
  loadRecentOrdersFail,
  loadRecentOrdersSuccess,
  orderPlaceFail,
  orderPlaceSuccess,
  placeOrderTurnSpinnerOn,
  updateSelectedFilteredCategories,
} from './orders.actions';
import { OrderSummary } from '@hotel/orderapp/shared/data-access';

export const ORDER_FEATURE_KEY = 'order';

export interface Order {
  errorMessage: string;
  recentOrders: OrderSummary[];
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
  on(loadRecentOrders, (state) => ({
    ...state,
    placeOrderSpinner: false,
    errorMessage: '',
  })),
  on(loadRecentOrdersSuccess, (state, { recentOrders }) => ({
    ...state,
    placeOrderSpinner: false,
    recentOrders,
  })),
  on(loadRecentOrdersFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    placeOrderSpinner: false,
  })),
  on(updateSelectedFilteredCategories, (state, { filteredCategories }) => ({
    ...state,
    userSelectedFilterCategories: filteredCategories,
  }))
);
