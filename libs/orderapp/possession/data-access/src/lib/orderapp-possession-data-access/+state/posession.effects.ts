import { Injectable } from '@angular/core';
import { PosSessionService } from '../posession.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadPosSessionFail,
  loadPosSessionSuccess,
  loadSessions,
  startSession,
  startSessionFailed,
  startSessionSuccess,
} from './posession.actions';
import { catchError, map, of, switchMap } from 'rxjs';

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
}
