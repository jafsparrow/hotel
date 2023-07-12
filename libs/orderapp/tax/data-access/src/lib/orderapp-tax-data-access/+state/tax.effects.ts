import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  addTax,
  addTaxFailed,
  addTaxSuccess,
  loadTaxes,
  loadTaxesFailed,
  loadTaxesSuccess,
  updateTax,
  updateTaxFailed,
  updateTaxSuccess,
} from './tax.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { TaxService } from '../tax.service';

@Injectable()
export class TaxEffects {
  constructor(private taxService: TaxService, private actions$: Actions) {}

  loadTaxEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTaxes),
      switchMap((data) =>
        this.taxService.loadTaxes().pipe(
          map((data) => loadTaxesSuccess({ taxes: data })),
          catchError((error) =>
            of(loadTaxesFailed({ errorMessage: 'Failed to load Taxs' }))
          )
        )
      )
    );
  });

  addTaxEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addTax),
      switchMap((data) =>
        this.taxService.createTax(data.tax).pipe(
          map((data) => addTaxSuccess({ tax: data })),
          catchError((error) =>
            of(addTaxFailed({ errorMessage: 'Failed to add Taxs' }))
          )
        )
      )
    );
  });

  addTaxSuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addTaxSuccess),
      switchMap((data) => of(loadTaxes()))
    );
  });

  editTaxEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTax),
      switchMap((data) =>
        this.taxService.updateTax(data.taxId, data.tax).pipe(
          tap((data) => console.log('insde update succe effe')),
          map((data) => updateTaxSuccess({ tax: data })),
          catchError((error) =>
            of(updateTaxFailed({ errorMessage: 'Failed to update Taxs' }))
          )
        )
      )
    );
  });

  editTaxSuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTaxSuccess),
      switchMap((data) => of(loadTaxes()))
    );
  });
}
