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

export const addKitchen = createAction(
  '[Kitchen] add a new kitchen',
  props<{ kitchen: Kitchen }>()
);
export const addKitchenSuccess = createAction(
  '[Kitchen] add a new kitchen Success',
  props<{ kitchen: Kitchen }>()
);
export const addKitchenFailed = createAction(
  '[Kitchen] add a new kitchen Failed',
  props<{ errorMessage: string }>()
);

export const updateKitchen = createAction(
  '[Kitchen] update a  kitchen',
  props<{ kitchendId: number; kitchen: Kitchen }>()
);
export const updateKitchenSuccess = createAction(
  '[Kitchen] update  kitchen Success',
  props<{ kitchen: Kitchen }>()
);
export const updateKitchenFailed = createAction(
  '[Kitchen] update  kitchen Failed',
  props<{ errorMessage: string }>()
);
