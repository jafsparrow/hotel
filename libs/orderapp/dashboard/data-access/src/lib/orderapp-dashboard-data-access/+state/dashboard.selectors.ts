import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DASHBOARD_FEATURE_KEY, DashBoardState } from './dashboard.reducers';

export const selectDashboardStat = createFeatureSelector<DashBoardState>(
  DASHBOARD_FEATURE_KEY
);

export const selectProductStat = createSelector(
  selectDashboardStat,
  (state) => state.productStats
);

export const selectloadIndicator = createSelector(
  selectDashboardStat,
  (state) => state.loadingIndicator
);

export const selectOrderStat = createSelector(
  selectDashboardStat,
  (state) => state.orderStats
);
