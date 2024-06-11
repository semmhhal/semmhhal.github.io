import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { addTokenInterceptor } from './auth/add-token.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './auth/auth.service';

function bootstrap() {
  const auth = inject(AuthService);
  return () => {
    const persisted_state = localStorage.getItem('workshop3');
    if (persisted_state) {
      auth.state$.set(JSON.parse(persisted_state));
    }
  };
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([addTokenInterceptor])),
    provideToastr(),
    provideAnimationsAsync(),
    { provide: APP_INITIALIZER, multi: true, useFactory: bootstrap },
  ],
};
