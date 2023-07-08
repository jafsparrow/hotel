import { Organisation, PrinterDetail } from '@hotel/common/types';
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

export const updateCompany = createAction(
  '[Company] add a company',
  props<{ company: Organisation }>()
);

export const updateCompanySuccess = createAction(
  '[Company] add a company success',
  props<{ organisation: Organisation }>()
);

export const updateCompanyFail = createAction(
  '[Company] add a company failed',
  props<{ error: string }>()
);

export const turnCompanyProgressIdicator = createAction(
  '[Company] turn indicator on'
);

export const loadPrinters = createAction('[Company] Load Connected Printers');

export const loadPrintersSuccess = createAction(
  '[Company] Load Connected Printers Success',
  props<{ printers: PrinterDetail[] }>()
);

export const loadPrintersFailed = createAction(
  '[Company] Load Connected Printers Failed',
  props<{ errorMessage: string }>()
);
