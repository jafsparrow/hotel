import { Floor, Table } from '@hotel/common/types';
import { loadProducts } from '@hotel/orderapp/product/data-access';
import { createReducer, on } from '@ngrx/store';
import {
  addTable,
  addTableFailed,
  addTableSuccess,
  loadFloorTables,
  loadFloorTablesFail,
  loadFloorTablesSuccess,
  loadFloors,
  loadFloorsFaile,
  loadFloorsSuccess,
  loadTables,
  updateTable,
  updateTableFailed,
  updateTableSuccess,
} from './table.actions';

export const TABLE_FEATURE_KEY = 'table';

export interface TableState {
  tables: Table[];
  selectedTable: Table | null;
  loadingIndicator: boolean;
  errorMessage: string;
  floors: Floor[];
  selectedFloorId: number;
  tableAddProgressIndicator: boolean;
}

const initialState: TableState = {
  tables: [],
  selectedTable: null,
  loadingIndicator: false,
  errorMessage: '',
  floors: [],
  selectedFloorId: 0,
  tableAddProgressIndicator: false,
};

export const tableReducers = createReducer(
  initialState,
  on(loadTables, (state) => ({ ...state, loadingIndicator: true })),
  on(loadFloors, (state) => ({ ...state, loadingIndicator: true })),
  on(loadFloorsSuccess, (state, { floors }) => ({
    ...state,
    loadingIndicator: false,
    floors,
  })),
  on(loadFloorsFaile, (state, { errorMessage }) => ({
    ...state,
    loadingIndicator: false,
    errorMessage,
  })),
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
  })),

  on(addTable, (state) => ({
    ...state,
    tableAddProgressIndicator: true,
    errorMessage: '',
  })),
  on(addTableSuccess, (state) => ({
    ...state,
    tableAddProgressIndicator: false,
    loadingIndicator: false,
  })),
  on(addTableFailed, (state, { errorMessage }) => ({
    ...state,
    tableAddProgressIndicator: false,
    errorMessage,
  })),

  on(updateTable, (state) => ({
    ...state,
    tableAddProgressIndicator: true,
    errorMessage: '',
  })),
  on(updateTableSuccess, (state) => ({
    ...state,
    tableAddProgressIndicator: false,
  })),
  on(updateTableFailed, (state, { errorMessage }) => ({
    ...state,
    tableAddProgressIndicator: false,
    errorMessage,
  }))
);
