import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';

import { enableProdMode } from '@angular/core';

// import { BrowserAppModuleNgFactory} from './aot-browser/app/browser-app.module.ngfactory';
import { BrowserAppModuleNgFactory} from './app/browser-app.module.ngfactory';

enableProdMode();

// platformBrowserDynamic().bootstrapModuleFactory(BrowserAppModuleNgFactory);
platformBrowser().bootstrapModuleFactory(BrowserAppModuleNgFactory);
