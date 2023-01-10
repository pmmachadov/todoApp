import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) // Carga el módulo AppModule.
  .catch(err => console.error(err));  // Si hay un error, lo muestra en la consola.
