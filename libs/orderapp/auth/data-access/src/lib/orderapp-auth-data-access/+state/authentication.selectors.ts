import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  AuthenticationState,
  AUTHENTICATION_FEATURE_KEY,
} from './authentication.reducers';

export const selectAuthState = createFeatureSelector<AuthenticationState>(
  AUTHENTICATION_FEATURE_KEY
);

export const selectUserCompanyId = createSelector(
  selectAuthState,
  (state) => state.user?.companyId
);

export const selectLoginProgressState = createSelector(
  selectAuthState,
  (state) => state.loginInProgress
);

export const selectLoginErrorMessage = createSelector(
  selectAuthState,
  (state) => state.errorMessage
);
export const selectIsUserAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectIsOrganisationUserLoggedIn = createSelector(
  selectAuthState,
  (state) => {
    return ['admin', 'staff'].indexOf(state.user!.userType!) > -1
      ? true
      : false;
  }
);

export const selectAccessBackOffice = createSelector(
  selectAuthState,
  (state) => {
    return state.user?.isAdmin ?? false;
  }
);

export const selectCanAccessCash = createSelector(selectAuthState, (state) => {
  const result = state.user && state.user!.isCashier;
  console.log('result is ', result);
  return result ? true : false;
});

export const selectSignedUser = createSelector(
  selectAuthState,
  (state) => state.user
);
