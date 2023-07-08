import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KITCHEN_FEATURE_KEY, KitchenState } from './kitchen.reducers';

export const selectKitchenState =
  createFeatureSelector<KitchenState>(KITCHEN_FEATURE_KEY);

export const selectKitchens = createSelector(
  selectKitchenState,
  (state) => state.kitchens
);
