import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'rxjs/add/operator/take';
import 'rxjs/rx';


platformBrowserDynamic().bootstrapModule(AppModule);
