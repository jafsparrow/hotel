import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '../company.service';
import { Store } from '@ngrx/store';
import {
  loadCompany,
  loadCompanyFail,
  loadCompanySuccess,
} from './company.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CompanyEffects {
  constructor(
    private companyService: CompanyService,
    private actions$: Actions,
    private store: Store // private _snackBar: MatSnackBar, // public dialog: MatDialog
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
}
