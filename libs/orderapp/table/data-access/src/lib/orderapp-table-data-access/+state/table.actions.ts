import { Floor, Table } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadTables = createAction('[Table] Load Tables');
export const loadFloorTables = createAction(
  '[Table] Load Floor vice tables',
  props<{ floorId: number }>()
);

export const loadFloorTablesSuccess = createAction(
  '[Table] Load Tables Success',
  props<{ floor: Floor }>()
);

export const loadFloorTablesFail = createAction(
  '[Table] Load Tables Failed',
  props<{ errorMessage: string }>()
);
