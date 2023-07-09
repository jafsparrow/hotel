import { Category, Organisation } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction('[CATEGORY] loadcategory');
export const loadCategoriesSuccess = createAction(
  '[CATEGORY] load category success',
  props<{ categories: Category[] }>()
);
export const loadCategoryFail = createAction(
  '[CATEGORY] load category failed',
  props<{ errorMessage: string }>()
);

export const addCategory = createAction(
  '[CATEGORY] add new category',
  props<{ category: Category }>()
);

export const addCategorySuccess = createAction(
  '[CATEGORY] add category success',
  props<{ category: Category }>()
);

export const addCategoryFail = createAction(
  '[CATEGORY] edit category fail',
  props<{ errorMessage: string }>()
);

export const editCategory = createAction(
  '[CATEGORY] edit new category',
  props<{ categoryId: number; category: Category }>()
);

export const editCategorySuccess = createAction(
  '[CATEGORY] edit category success',
  props<{ category: Category }>()
);

export const editCategoryFail = createAction(
  '[CATEGORY] edit category fail',
  props<{ errorMessage: string }>()
);
