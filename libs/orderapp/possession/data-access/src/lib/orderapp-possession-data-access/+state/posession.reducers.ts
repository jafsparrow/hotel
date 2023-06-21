import { PosSession } from '@hotel/common/types';

export const SESSION_FEATURE_KEY = 'possession';
export interface PosSessionState {
  sessionsOfTheDay: PosSession[];
  activeSession: PosSession | null;
  loadingIndicator: boolean;
  errorMessage: string;
}

const initialState: PosSessionState = {
  sessionsOfTheDay: [],
  activeSession: null,
  loadingIndicator: false,
  errorMessage: '',
};
