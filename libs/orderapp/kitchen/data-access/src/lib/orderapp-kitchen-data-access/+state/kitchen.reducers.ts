import { Kitchen } from '@hotel/common/types';
import { createReducer, on } from '@ngrx/store';
import {
  addKitchen,
  addKitchenFailed,
  addKitchenSuccess,
  loadKitchenSuccess,
  loadKitchens,
  loadKitchensFailed,
  updateKitchen,
  updateKitchenFailed,
  updateKitchenSuccess,
} from './kitchen.actions';

export const KITCHEN_FEATURE_KEY = 'kitchen';

export interface KitchenState {
  kitchens: Kitchen[];
  loadingIndicator: boolean;
  errorMessage: string;
}

const intialState: KitchenState = {
  kitchens: [],
  loadingIndicator: false,
  errorMessage: '',
};

export const kitchenReducer = createReducer(
  intialState,
  on(loadKitchens, (state) => ({
    ...state,
    loadingIndicator: true,
    errorMessage: '',
  })),
  on(loadKitchenSuccess, (state, { kitchens }) => ({
    ...state,
    loadingIndicator: false,
    errorMessage: '',
    kitchens,
  })),
  on(loadKitchensFailed, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    loadingIndicator: false,
  })),
  on(addKitchen, (state) => ({
    ...state,
    loadingIndicator: true,
    errorMessage: '',
  })),
  on(addKitchenSuccess, (state) => ({ ...state, loadingIndicator: false })),
  on(addKitchenFailed, (state, { errorMessage }) => ({
    ...state,
    loadingIndicator: false,
    errorMessage,
  })),

  on(updateKitchen, (state) => ({
    ...state,
    loadingIndicator: true,
    errorMessage: '',
  })),
  on(updateKitchenSuccess, (state) => ({ ...state, loadingIndicator: false })),
  on(updateKitchenFailed, (state, { errorMessage }) => ({
    ...state,
    loadingIndicator: false,
    errorMessage,
  }))
);
