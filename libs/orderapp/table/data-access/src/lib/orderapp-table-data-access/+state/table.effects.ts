import { Injectable } from '@angular/core';
import { ProductService } from '../table.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadFloorTables,
  loadFloorTablesFail,
  loadFloorTablesSuccess,
  loadFloors,
  loadFloorsFaile,
  loadFloorsSuccess,
  loadTables,
} from './table.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class TableEffects {
  constructor(
    private productService: ProductService,
    private action$: Actions // private router: Router, // private _snackBar: MatSnackBar
  ) {}

  loadFloorViceTableEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadFloorTables),
      switchMap((data) =>
        this.productService.loadFloorTables(data.floorId).pipe(
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
        this.productService.loadFloors().pipe(
          map((floors) => loadFloorsSuccess({ floors })),
          catchError((error) => of(loadFloorsFaile({ errorMessage: error })))
        )
      )
    );
  });
}
