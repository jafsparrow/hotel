import { Tax } from '@hotel/common/types';
import { loadTaxes } from '@hotel/orderapp/cart/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  addTax,
  addTaxFailed,
  addTaxSuccess,
  loadTaxesFailed,
  loadTaxesSuccess,
  updateTax,
  updateTaxFailed,
  updateTaxSuccess,
} from './tax.actions';

export const TAX_FEATURE_KEY = 'tax';

export interface TaxState {
  taxes: Tax[];
  loadingIndicator: boolean;
  errorMessage: string;
  taxAddProgressIndicator: boolean;
}

const intialState: TaxState = {
  taxes: [],
  loadingIndicator: false,
  taxAddProgressIndicator: false,
  errorMessage: '',
};

export const taxReducer = createReducer(
  intialState,
  on(loadTaxes, (state) => ({
    ...state,
    loadingIndicator: true,
    errorMessage: '',
  })),
  on(loadTaxesSuccess, (state, { taxes }) => ({
    ...state,
    loadingIndicator: false,
    errorMessage: '',
    taxes,
  })),
  on(loadTaxesFailed, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    loadingIndicator: false,
  })),
  on(addTax, (state) => ({
    ...state,
    kitchAddProgressIndicator: true,
    errorMessage: '',
  })),
  on(addTaxSuccess, (state) => ({
    ...state,
    kitchAddProgressIndicator: false,
    loadingIndicator: false,
  })),
  on(addTaxFailed, (state, { errorMessage }) => ({
    ...state,
    kitchAddProgressIndicator: false,
    errorMessage,
  })),

  on(updateTax, (state) => ({
    ...state,
    kitchAddProgressIndicator: true,
    errorMessage: '',
  })),
  on(updateTaxSuccess, (state) => ({
    ...state,
    kitchAddProgressIndicator: false,
  })),
  on(updateTaxFailed, (state, { errorMessage }) => ({
    ...state,
    kitchAddProgressIndicator: false,
    errorMessage,
  }))
);
