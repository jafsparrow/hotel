import { ProductStat } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadProductStats = createAction(
  '[Dashboard] Load product stat of the period',
  props<{ startDate: string; endDate: string }>()
);

export const loadProductStatsSuccess = createAction(
  '[Dashboard] Load product stat of the period Success',
  props<{ stats: ProductStat[] }>()
);

export const loadProductStatsFail = createAction(
  '[Dashboard] Load product stat of the period failed',
  props<{ errorMessage: string }>()
);
