import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '../company.service';
import { Store } from '@ngrx/store';
import {
  loadCompany,
  loadCompanyFail,
  loadCompanySuccess,
  loadPrinters,
  loadPrintersFailed,
  loadPrintersSuccess,
  updateCompany,
  updateCompanyFail,
  updateCompanySuccess,
} from './company.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class CompanyEffects {
  constructor(
    private companyService: CompanyService,
    private actions$: Actions,
    private store: Store, // private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  loadCompanyEffects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCompany),
      switchMap((data) =>
        this.companyService.loadCompany(data.id).pipe(
          map((org) => loadCompanySuccess({ company: org })),
          catchError((error) =>
            of(loadCompanyFail({ error: 'failed to laod company' }))
          )
        )
      )
    );
  });

  updateCompanyEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateCompany),
      switchMap((data) =>
        this.companyService.updateCompany(data.company).pipe(
          map((data) => updateCompanySuccess({ organisation: data })),
          catchError((error) =>
            of(
              updateCompanyFail({
                error: 'failed to update company informations',
              })
            )
          )
        )
      )
    );
  });

  updateCompanySuccessEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(updateCompanySuccess),
        tap((data) => this.dialog.closeAll())
      );
    },
    { dispatch: false }
  );

  loadPrintersEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPrinters),
      switchMap((data) =>
        this.companyService.loadPrinters().pipe(
          map((data) => loadPrintersSuccess({ printers: data })),
          catchError((error) =>
            of(
              loadPrintersFailed({
                errorMessage: 'Error happned while fetching printers',
              })
            )
          )
        )
      )
    );
  });
}
