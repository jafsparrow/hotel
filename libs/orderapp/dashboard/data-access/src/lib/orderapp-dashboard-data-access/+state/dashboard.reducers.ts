import { Product, User } from '@hotel/common/types';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface OrderStats {
  numberOfOrders: number;
  totalSales: number;
}

export interface ProductStat {
  product: Product;
  totalOrders: number;
}

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
  orderStats: OrderStats | null;
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
  orderStats: null,
  productStats: [],
  statfStats: [],
};
