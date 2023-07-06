import { OrderStat, Product, ProductStat, User } from '@hotel/common/types';
import { createReducer, on } from '@ngrx/store';
import {
  loadProductStats,
  loadProductStatsFail,
  loadProductStatsSuccess,
  loadOrderStatsFail,
  loadOrderStatsSuccess,
  loadOrderStats,
} from './dashboard.actions';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface StaffStat {
  user: User;
  totalOrders: number;
  totalSales: number;
}

export interface Duration {
  startDateIso: string;
  endDateIso: string;
}

export interface DashBoardState {
  loadingIndicator: boolean;
  selectedDuration: Duration | null;
  orderStats: OrderStat[];
  productStats: ProductStat[];
  statfStats: StaffStat[];
  successMessage: string;
  errorMessage: string;
}

const initialState: DashBoardState = {
  selectedDuration: null,
  loadingIndicator: false,
  errorMessage: '',
  successMessage: '',
  orderStats: [],
  productStats: [],
  statfStats: [],
};

export const dashboardReducer = createReducer(
  initialState,
  on(loadProductStats, (state) => ({
    ...state,
    loadingIndicator: true,
    productStats: [],
  })),
  on(loadProductStatsSuccess, (state, { stats }) => ({
    ...state,
    loadingIndicator: false,
    productStats: stats,
  })),
  on(loadProductStatsFail, (state, { errorMessage }) => ({
    ...state,
    loadingIndicator: false,
    errorMessage,
  })),
  on(loadOrderStats, (state) => ({
    ...state,
    loadingIndicator: true,
    orderStats: [],
  })),
  on(loadOrderStatsSuccess, (state, { stats }) => ({
    ...state,
    loadingIndicator: false,
    orderStats: stats,
  })),
  on(loadOrderStatsFail, (state, { errorMessage }) => ({
    ...state,
    loadingIndicator: false,
    errorMessage,
  }))
);
