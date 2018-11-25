// main.ts is the entry point for an application
// it bootstraps app.module, which holds the application 
// and its components
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
