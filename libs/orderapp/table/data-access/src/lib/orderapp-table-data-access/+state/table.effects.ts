import { Injectable } from '@angular/core';
import { ProductService } from '../table.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadFloorTables,
  loadTables,
  loadTablesFail,
  loadTablesSuccess,
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
          map((tables) => loadTablesSuccess({ tables })),
          catchError((error) => of(loadTablesFail({ errorMessage: error })))
        )
      )
    );
  });
}
