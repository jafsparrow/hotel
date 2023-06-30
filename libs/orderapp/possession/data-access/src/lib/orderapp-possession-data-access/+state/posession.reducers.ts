import { PosSession, SessionStatus } from '@hotel/common/types';
import { createReducer, on } from '@ngrx/store';
import {
  loadPosSessionFail,
  loadPosSessionSuccess,
  loadSessions,
  startSession,
  startSessionFailed,
  startSessionSuccess,
} from './posession.actions';

export const SESSION_FEATURE_KEY = 'possession';
export interface PosSessionState {
  sessionsOfTheDay: PosSession[];
  activeSession: PosSession | null;
  loadingIndicator: boolean;
  sessionStartIndicator: boolean;
  errorMessage: string;
  sessionStartError: string;
}

const initialState: PosSessionState = {
  sessionsOfTheDay: [
    {
      id: 1,
      startTime: new Date('29/06/2023'),
      endTime: new Date(),
      status: SessionStatus.CLOSE,
    },
    {
      id: 2,
      startTime: new Date('29/06/2023'),
      endTime: new Date(),
      status: SessionStatus.CLOSE,
    },
    {
      id: 2,
      startTime: new Date('29/06/2023'),
      endTime: new Date(),
      status: SessionStatus.ACTIVE,
    },
  ],
  activeSession: null,
  loadingIndicator: false,
  sessionStartIndicator: false,
  errorMessage: '',
  sessionStartError: '',
};

export const posSessionsReducer = createReducer(
  initialState,
  on(loadSessions, (state) => ({ ...state, loadingIndicator: true })),
  on(loadPosSessionSuccess, (state, { sessions }) => {
    return {
      ...state,
      sessionsOfTheDay: sessions,
      loadingIndicator: false,
      errorMessage: '',
    };
  }),
  on(loadPosSessionFail, (state, { errorMessage }) => ({
    ...state,
    loadingIndicator: false,
    errorMessage: errorMessage,
  })),
  on(startSession, (state) => ({
    ...state,
    sessionStartIndicator: true,
    sessionStartError: '',
  })),
  on(startSessionSuccess, (state, { sessions }) => ({
    ...state,
    sessionsOfTheDay: sessions,
    sessionStartIndicator: false,
    sessionStartError: '',
  })),
  on(startSessionFailed, (state, { errorMessage }) => ({
    ...state,
    sessionStartError: errorMessage,
    sessionStartIndicator: false,
  }))
);
