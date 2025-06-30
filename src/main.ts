import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import AOS from 'aos';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  AOS.init();
