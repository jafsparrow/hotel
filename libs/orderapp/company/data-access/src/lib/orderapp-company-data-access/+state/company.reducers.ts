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
  company: Organisation;
  loadingIndicator: boolean;
  errorMessage: string;
}

const initialState: CompanyState = {
  company: {
    _id: '1',
    address: '',
    caption: '',
    name: '',
    taxes: [{ name: 'VAT', isPercentage: true, printName: 'VAT 5%', value: 5 }],
  },
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
