import { Kitchen } from '@hotel/common/types';
import { createReducer, on } from '@ngrx/store';
import {
  loadKitchenSuccess,
  loadKitchens,
  loadKitchensFailed,
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
  }))
);
