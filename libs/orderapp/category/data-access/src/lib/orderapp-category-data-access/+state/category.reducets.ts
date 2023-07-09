import { createReducer, on } from '@ngrx/store';
import {
  addCategory,
  addCategoryFail,
  addCategorySuccess,
  editCategory,
  editCategoryFail,
  editCategorySuccess,
  loadCategoriesSuccess,
  loadCategoryFail,
} from './category.actions';
import { Category } from '@hotel/common/types';

export const CATEGORY_FEATURE_KEY = 'category';

export interface CategoryState {
  categories: Category[];
  isCategoryLoading: boolean;
  errorMessage: string;
  categoryAddProgressIndicator: boolean;
}

const initialState: CategoryState = {
  categories: [],
  isCategoryLoading: false,
  errorMessage: '',
  categoryAddProgressIndicator: false,
};

export const categoryReducer = createReducer(
  initialState,
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories: categories,
    errorMessage: '',
  })),
  on(loadCategoryFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage: errorMessage,
  })),
  on(addCategory, (state) => ({
    ...state,
    categoryAddProgressIndicator: true,
    errorMessage: '',
  })),
  on(addCategorySuccess, (state) => ({
    ...state,
    categoryAddProgressIndicator: false,
    errorMessage: '',
  })),
  on(addCategoryFail, (state, { errorMessage }) => ({
    ...state,
    categoryAddProgressIndicator: false,
    errorMessage,
  })),
  on(editCategory, (state) => ({
    ...state,
    categoryAddProgressIndicator: true,
    errorMessage: '',
  })),
  on(editCategorySuccess, (state) => ({
    ...state,
    categoryAddProgressIndicator: false,
    errorMessage: '',
  })),
  on(editCategoryFail, (state, { errorMessage }) => ({
    ...state,
    categoryAddProgressIndicator: false,
    errorMessage,
  }))
);
