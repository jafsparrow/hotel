import { Injectable } from '@angular/core';
import { DashboardService } from '../dashboard.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProductStats,
  loadProductStatsFail,
  loadProductStatsSuccess,
} from './dashboard.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class DashboardEffects {
  constructor(
    private dasharodService: DashboardService,
    private action$: Actions
  ) {}

  loadProductStatEffects$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadProductStats),
      switchMap((data) =>
        this.dasharodService
          .getProductStatsForTheDuration(data.startDate, data.endDate)
          .pipe(
            map((data) => loadProductStatsSuccess({ stats: data })),
            catchError((error) =>
              of(
                loadProductStatsFail({
                  errorMessage: 'somethign wrong while featching product stat',
                })
              )
            )
          )
      )
    );
  });
}
