import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TAX_FEATURE_KEY, TaxState } from './tax.reducer';

export const selectTaxState = createFeatureSelector<TaxState>(TAX_FEATURE_KEY);

export const selectTaxes = createSelector(
  selectTaxState,
  (state) => state.taxes
);

export const selectTaxLoadingIndicator = createSelector(
  selectTaxState,
  (state) => state.loadingIndicator
);

export const selectTaxAddLoadingIndicator = createSelector(
  selectTaxState,
  (state) => state.taxAddProgressIndicator
);
