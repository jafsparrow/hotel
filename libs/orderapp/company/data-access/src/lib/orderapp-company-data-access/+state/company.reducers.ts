import { Organisation } from '@hotel/common/types';
import {
  addCompanyFail,
  addCompanySuccess,
  loadCompanySuccess,
  turnCompanyProgressIdicator,
} from './company.actions';
import { createReducer, on } from '@ngrx/store';

export const COMPANY_FEATURE_KEY = 'company';

export interface CompanyState {
  company: Organisation | null;
  loadingIndicator: boolean;
  errorMessage: string;
}

const initialState: CompanyState = {
  company: null,
  loadingIndicator: false,
  errorMessage: '',
};

export const companyReducer = createReducer(
  initialState,
  on(turnCompanyProgressIdicator, (state) => ({
    ...state,
    loadingIndicator: true,
  })),
  on(loadCompanySuccess, (state, { company }) => {
    return {
      ...state,
      company,
      loadingIndicator: false,
    };
  }),
  on(addCompanySuccess, (state, { organisation }) => ({
    ...state,
    company: organisation,
    loadingIndicator: false,
  })),
  on(addCompanyFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    loadingIndicator: false,
  }))
);
