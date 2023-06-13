import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMPANY_FEATURE_KEY, CompanyState } from './company.reducers';

export const selectCompanyState =
  createFeatureSelector<CompanyState>(COMPANY_FEATURE_KEY);

export const selectCompany = createSelector(
  selectCompanyState,
  (state) => state.company
);
