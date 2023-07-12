import { ApplicationConfig, importProvidersFrom } from '@angular/core';
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
import { MatDialogModule } from '@angular/material/dialog';

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
    importProvidersFrom(MatDialogModule), // this is required to import module which are not ngModule any more. I had an issue using matdialo in ngrx effect, was saying null injectione error. when I do this, it is all gone..
  ],
};
