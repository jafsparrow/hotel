import { Injectable } from '@angular/core';
import { PosSessionService } from '../posession.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  closeSession,
  closeSessionFailed,
  closeSessionSuccess,
  loadPosSessionFail,
  loadPosSessionSuccess,
  loadSessions,
  printSessionReport,
  printSessionReportFail,
  printSessionReportSuccess,
  startSession,
  startSessionFailed,
  startSessionSuccess,
} from './posession.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class PosSessionEffects {
  constructor(
    private sessionService: PosSessionService,
    private action$: Actions
  ) {}

  loadSessionsEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadSessions),
      switchMap(() =>
        this.sessionService.getPosSessions().pipe(
          map((data) => loadPosSessionSuccess({ sessions: data })),
          catchError((error) =>
            of(loadPosSessionFail({ errorMessage: 'load sessions failed.' }))
          )
        )
      )
    );
  });

  startSessionEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(startSession),
      switchMap((data) =>
        this.sessionService.createSession(data.cash).pipe(
          map((data) => startSessionSuccess({ sessions: data })),
          catchError((error) => of(startSessionFailed({ errorMessage: error })))
        )
      )
    );
  });

  closeSessionEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(closeSession),
      switchMap((data) =>
        this.sessionService.closeSession(data.sessionId).pipe(
          map((data) => closeSessionSuccess({ sessions: data })),
          catchError((error) =>
            of(closeSessionFailed({ errorMessage: 'closing session failed' }))
          )
        )
      )
    );
  });

  printSessionReportEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(printSessionReport),
      switchMap((data) =>
        this.sessionService.printSessionReport(data.sessionId).pipe(
          tap((data) => {
            console.log('cratnig blobb');
            // const file = new Blob([data], { type: 'application/pdf' });
            // const fileURL = URL.createObjectURL(file);
            // window.open(fileURL, '_blank', 'width: 1000, height:800');
          }),
          map((data) =>
            printSessionReportSuccess({
              successMessage: 'Printed successfully',
            })
          ),
          catchError((error) => {
            console.log(error);
            return of(
              printSessionReportFail({
                errorMessage: 'Printing report failed.',
              })
            );
          })
        )
      )
    );
  });
}
