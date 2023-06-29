import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PosSessionState, SESSION_FEATURE_KEY } from './posession.reducers';
import { SessionStatus } from '@hotel/common/types';

export const selectPosSessionState =
  createFeatureSelector<PosSessionState>(SESSION_FEATURE_KEY);

export const selectPosSessions = createSelector(
  selectPosSessionState,
  (state) => state.sessionsOfTheDay
);

export const selectActiveSession = createSelector(
  selectPosSessions,
  (sessions) =>
    sessions.filter((item) => item.status === SessionStatus.ACTIVE)[0]
);
