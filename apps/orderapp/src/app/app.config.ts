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
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  AUTHENTICATION_FEATURE_KEY,
  AuthenticationEffects,
  authReducer,
} from '@hotel/orderapp/auth/data-access';
import {
  ErrorInterceptor,
  TokenInterceptor,
  authInterceptor,
} from '@hotel/orderapp/core';

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
      useFactory: () => {
        const endPointFromLocalStorage = localStorage.getItem('endPoint');
        // return `${window.location.origin}/api`;
        return environment.apiUrl;
      },
    },
    provideState(AUTHENTICATION_FEATURE_KEY, authReducer),
    provideEffects(AuthenticationEffects),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
};
