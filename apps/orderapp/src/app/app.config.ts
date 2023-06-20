import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';
import {
  AUTHENTICATION_FEATURE_KEY,
  AuthenticationEffects,
  authReducer,
} from '@hotel/orderapp/auth/data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    provideEffects(),
    provideStore(),
    provideHttpClient(),
    provideStoreDevtools(),
    {
      provide: 'endPointURL',
      useValue: environment.apiUrl,
    },
    provideState(AUTHENTICATION_FEATURE_KEY, authReducer),
    provideEffects(AuthenticationEffects),
  ],
};
