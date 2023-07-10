import { Floor, Table } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadTables = createAction('[Table] Load Tables');
export const loadFloors = createAction('[Table] Load Floors');
export const loadFloorsSuccess = createAction(
  '[Table] Load Floors Success',
  props<{ floors: Floor[] }>()
);
export const loadFloorsFaile = createAction(
  '[Table] Load Floors Fail',
  props<{ errorMessage: string }>()
);
export const loadFloorTables = createAction(
  '[Table] Load Floor vice tables',
  props<{ floorId: number }>()
);

export const loadFloorTablesSuccess = createAction(
  '[Table] Load floor Tables Success',
  props<{ floor: Floor }>()
);

export const loadFloorTablesFail = createAction(
  '[Table] Load  flood table Failed',
  props<{ errorMessage: string }>()
);

export const addTable = createAction(
  '[Table] add a new table',
  props<{ table: Table }>()
);
export const addTableSuccess = createAction(
  '[Table] add a new table Success',
  props<{ table: Table }>()
);
export const addTableFailed = createAction(
  '[Table] add a new table Failed',
  props<{ errorMessage: string }>()
);

export const updateTable = createAction(
  '[Table] update a  table',
  props<{ tabledId: number; table: Table }>()
);
export const updateTableSuccess = createAction(
  '[Table] update  table Success',
  props<{ table: Table }>()
);
export const updateTableFailed = createAction(
  '[Table] update  table Failed',
  props<{ errorMessage: string }>()
);
