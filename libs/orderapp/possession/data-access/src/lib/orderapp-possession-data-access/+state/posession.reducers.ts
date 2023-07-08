import { PosSession, SessionStatus } from '@hotel/common/types';
import { createReducer, on } from '@ngrx/store';
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

export const SESSION_FEATURE_KEY = 'possession';
export interface PosSessionState {
  sessionsOfTheDay: PosSession[];
  activeSession: PosSession | null;
  loadingIndicator: boolean;
  sessionStartIndicator: boolean;
  errorMessage: string;
  sessionStartError: string;
  sessionEndIndicator: boolean;
  sessionEndError: string;
  printSessionReportIndicator: boolean;
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
      status: SessionStatus.CLOSE,
    },
  ],
  activeSession: null,
  loadingIndicator: false,
  sessionStartIndicator: false,
  errorMessage: '',
  sessionStartError: '',
  sessionEndIndicator: false,
  sessionEndError: '',
  printSessionReportIndicator: false,
};

export const posSessionsReducer = createReducer(
  initialState,
  on(loadSessions, (state) => ({ ...state, loadingIndicator: true })),
  on(loadPosSessionSuccess, (state, { sessions }) => {
    console.log('inside success session reducer');
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
  })),
  on(closeSession, (state) => ({
    ...state,
    sessionEndError: '',
    sessionEndIndicator: true,
  })),
  on(closeSessionFailed, (state, { errorMessage }) => ({
    ...state,
    sessionEndError: errorMessage,
    sessionEndIndicator: false,
  })),
  on(closeSessionSuccess, (state, { sessions }) => ({
    ...state,
    sessionEndError: '',
    sessionEndIndicator: false,
    sessionsOfTheDay: sessions,
  })),
  on(printSessionReport, (state, { sessionId }) => ({
    ...state,
    printSessionReportIndicator: true,
  })),
  on(printSessionReportSuccess, (state, { successMessage }) => ({
    ...state,
    printSessionReportIndicator: false,
  })),
  on(printSessionReportFail, (state, { errorMessage }) => ({
    ...state,
    printSessionReportIndicator: false,
  }))
);
