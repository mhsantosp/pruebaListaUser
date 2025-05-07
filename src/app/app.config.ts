import { ApplicationConfig } from '@angular/core';
import { appRouterProviders } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [...appRouterProviders],
};
