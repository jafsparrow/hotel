import { Organisation } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadCompany = createAction(
  '[Company] Load company',
  props<{ id: number }>()
);

export const loadCompanySuccess = createAction(
  '[Company] Load company success',
  props<{ company: Organisation }>()
);

export const loadCompanyFail = createAction(
  '[Company] Load company success',
  props<{ error: string }>()
);

export const addCompany = createAction(
  '[Company] add a company',
  props<{ company: Organisation }>()
);

export const addCompanySuccess = createAction(
  '[Company] add a company success',
  props<{ organisation: Organisation }>()
);

export const addCompanyFail = createAction(
  '[Company] add a company failed',
  props<{ error: string }>()
);

export const turnCompanyProgressIdicator = createAction(
  '[Company] turn indicator on'
);