import { Table } from '@hotel/common/types';
import { loadProducts } from '@hotel/orderapp/product/data-access';
import { createReducer, on } from '@ngrx/store';
import { loadTables, loadTablesFail, loadTablesSuccess } from './table.actions';

export const TABLE_FEATURE_KEY = 'table';

export interface TableState {
  tables: Table[];
  selectedTable: Table | null;
  loadingIndicator: boolean;
  errorMessage: string;
}

const initialState: TableState = {
  tables: [],
  selectedTable: null,
  loadingIndicator: false,
  errorMessage: '',
};

export const tableReducers = createReducer(
  initialState,
  on(loadTables, (state) => ({ ...state, loadingIndicator: true })),
  on(loadTablesSuccess, (state, { tables }) => ({
    ...state,
    loadingIndicator: false,
    tables,
  })),
  on(loadTablesFail, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    loadingIndicator: false,
  }))
);
