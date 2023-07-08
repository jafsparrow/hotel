import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMPANY_FEATURE_KEY, CompanyState } from './company.reducers';

export const selectCompanyState =
  createFeatureSelector<CompanyState>(COMPANY_FEATURE_KEY);

export const selectCompany = createSelector(
  selectCompanyState,
  (state) => state.company
);

export const selectCompanyTaxes = createSelector(
  selectCompany,
  (company) => company.taxes
);

export const selectPrinters = createSelector(
  selectCompanyState,
  (state) => state.printers
);
