import { PosSession } from '@hotel/common/types';
import { createAction, props } from '@ngrx/store';

export const loadSessions = createAction('[POS Session] Load pos sessions');

export const loadPosSessionSuccess = createAction(
  '[POS Session] load pos session success',
  props<{ sessions: PosSession[] }>()
);

export const loadPosSessionFail = createAction(
  '[POS Session] load pos session failed',
  props<{ errorMessage: string }>()
);

export const startSession = createAction('[POS Session] Start a new session');
export const startSessionSuccess = createAction(
  '[POS Session] Start a new session success',

  props<{ sessions: PosSession[] }>()
);
export const startSessionFailed = createAction(
  '[POS Session] Start a new session failed',

  props<{ errorMessage: string }>()
);

export const closeSession = createAction('[POS Session] Close a session');
export const closeSessionSuccess = createAction(
  '[POS Session] Close a session success',

  props<{ sessions: PosSession[] }>()
);
export const closeSessionFailed = createAction(
  '[POS Session] Close a session failed',

  props<{ errorMessage: string }>()
);
