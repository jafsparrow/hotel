import { Tax } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadTaxes = createAction('[Tax] Load Taxs');

export const loadTaxesSuccess = createAction(
  '[Tax] Load Taxes success',
  props<{ taxes: Tax[] }>()
);
export const loadTaxesFailed = createAction(
  '[Tax] Load Taxs Failed',
  props<{ errorMessage: string }>()
);

export const addTax = createAction(
  '[Tax] add a new Tax',
  props<{ tax: Tax }>()
);
export const addTaxSuccess = createAction(
  '[Tax] add a new Tax Success',
  props<{ tax: Tax }>()
);
export const addTaxFailed = createAction(
  '[Tax] add a new Tax Failed',
  props<{ errorMessage: string }>()
);

export const updateTax = createAction(
  '[Tax] update a  Tax',
  props<{ taxdId: number; Tax: Tax }>()
);
export const updateTaxSuccess = createAction(
  '[Tax] update  Tax Success',
  props<{ tax: Tax }>()
);
export const updateTaxFailed = createAction(
  '[Tax] update  Tax Failed',
  props<{ errorMessage: string }>()
);
