import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { TableService } from '../table.service';

@Injectable()
export class TableEffects {
  constructor(
    private tableService: TableService,
    private action$: Actions // private router: Router, // private _snackBar: MatSnackBar
  ) {}

  loadFloorViceTableEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadFloorTables),
      switchMap((data) =>
        this.tableService.loadFloorTables(data.floorId).pipe(
          map((floor) => loadFloorTablesSuccess({ floor: floor })),
          catchError((error) =>
            of(loadFloorTablesFail({ errorMessage: error }))
          )
        )
      )
    );
  });

  loadFloorsEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadFloors),
      switchMap((data) =>
        this.tableService.loadFloors().pipe(
          map((floors) => loadFloorsSuccess({ floors })),
          catchError((error) => of(loadFloorsFaile({ errorMessage: error })))
        )
      )
    );
  });

  addTableEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addTable),
      switchMap((data) =>
        this.tableService.createTable(data.table).pipe(
          map((data) => addTableSuccess({ table: data })),
          catchError((error) =>
            of(addTableFailed({ errorMessage: 'Failed to add tables' }))
          )
        )
      )
    );
  });

  addTableSuccessEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addTableSuccess),
      switchMap((data) => of(loadFloorTables({ floorId: 1 })))
    );
  });

  editTableEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updateTable),
      switchMap((data) =>
        this.tableService.updateTable(data.tabledId, data.table).pipe(
          tap((data) => console.log('insde update succe effe')),
          map((data) => updateTableSuccess({ table: data })),
          catchError((error) =>
            of(updateTableFailed({ errorMessage: 'Failed to update tables' }))
          )
        )
      )
    );
  });

  editTableSuccessEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updateTableSuccess),
      switchMap((data) => of(loadFloorTables({ floorId: 1 })))
    );
  });
}
