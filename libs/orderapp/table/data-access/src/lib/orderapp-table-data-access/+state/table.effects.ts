import { Injectable } from '@angular/core';
import { ProductService } from '../table.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTables, loadTablesSuccess } from './table.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadProductsFail } from '@hotel/orderapp/product/data-access';

@Injectable()
export class CartEffects {
  constructor(
    private productService: ProductService,
    private action$: Actions // private router: Router,
  ) // private _snackBar: MatSnackBar
  {}

  loadCart$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadTables),
      switchMap(() =>
        this.productService.loadTables().pipe(
          map((tables) => loadTablesSuccess({ tables })),
          catchError((error) => of(loadProductsFail({ error })))
        )
      )
    );
  });
}
