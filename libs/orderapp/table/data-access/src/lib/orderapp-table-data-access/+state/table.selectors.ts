import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TABLE_FEATURE_KEY, TableState } from './table.reducers';

export const selectTableState =
  createFeatureSelector<TableState>(TABLE_FEATURE_KEY);

export const selectTables = createSelector(
  selectTableState,
  (state) => state.tables
);

export const selectTableLoadingIndicator = createSelector(
  selectTableState,
  (state) => state.loadingIndicator
);
