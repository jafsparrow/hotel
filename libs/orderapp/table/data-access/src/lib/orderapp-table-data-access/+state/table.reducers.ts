import { Floor, Table } from '@hotel/common/types';
import { loadProducts } from '@hotel/orderapp/product/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  loadFloorTables,
  loadFloorTablesFail,
  loadFloorTablesSuccess,
  loadTables,
} from './table.actions';

export const TABLE_FEATURE_KEY = 'table';

export interface TableState {
  tables: Table[];
  selectedTable: Table | null;
  loadingIndicator: boolean;
  errorMessage: string;
  floors: Floor[];
  selectedFloorId: number;
}

const initialState: TableState = {
  tables: [],
  selectedTable: null,
  loadingIndicator: false,
  errorMessage: '',
  floors: [],
  selectedFloorId: 0,
};

export const tableReducers = createReducer(
  initialState,
  on(loadTables, (state) => ({ ...state, loadingIndicator: true })),
  on(loadFloorTables, (state, { floorId }) => ({
    ...state,
    loadingIndicator: true,
    selectedFloorId: floorId,
  })),
  on(loadFloorTablesSuccess, (state, { floor }) => ({
    ...state,
    loadingIndicator: false,
    tables: floor.tables!,
  })),
  on(loadFloorTablesFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    loadingIndicator: false,
  }))
);
