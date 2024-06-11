import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';

import { routes } from './app.routes';
import { GameServicesService } from './game-services.service';
import { initializeGameState } from './initializer'; // Adjust the import path as necessary
import { BrowserDetectService } from './browsr-service.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    GameServicesService,
    BrowserDetectService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeGameState,
      deps: [GameServicesService],
      multi: true,
    },
  ],
};
