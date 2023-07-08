import { Kitchen } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadKitchens = createAction('[Kitchen] Load Kitchens');

export const loadKitchenSuccess = createAction(
  '[Kitchen] Load Kitchens success',
  props<{ kitchens: Kitchen[] }>()
);
export const loadKitchensFailed = createAction(
  '[Kitchen] Load Kitchens Failed',
  props<{ errorMessage: string }>()
);
