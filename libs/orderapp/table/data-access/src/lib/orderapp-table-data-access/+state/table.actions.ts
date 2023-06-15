import { Table } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadTables = createAction('[Table] Load Tables');
export const loadFloorTables = createAction(
  '[Table] Load Floor vice tables',
  props<{ floorId: number }>()
);

export const loadTablesSuccess = createAction(
  '[Table] Load Tables Success',
  props<{ tables: Table[] }>()
);

export const loadTablesFail = createAction(
  '[Table] Load Tables Failed',
  props<{ errorMessage: string }>()
);
