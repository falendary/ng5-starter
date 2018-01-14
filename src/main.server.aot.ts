import 'core-js';
import 'ie-shim';

import 'zone.js/dist/zone-node';
import 'reflect-metadata';

// import 'rxjs/Rx';
import * as express from 'express';
import {platformServer, renderModuleFactory} from '@angular/platform-server';
// import {ServerAppModuleNgFactory} from './aot-server/app/server-app.module.ngfactory';
import {ServerAppModuleNgFactory} from './app/server-app.module.ngfactory';
import {ngExpressEngine} from '@nguniversal/express-engine';
// import {ngExpressEngine} from './modules/ng-express-engine/express-engine';
import {ROUTES} from './routes';
import {enableProdMode} from '@angular/core';

import * as compression from 'compression';

enableProdMode();
const app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.use(compression());
app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModuleNgFactory,
}));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));

ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.render('../dist/index', {

      async: true,
      preboot: true,

      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

// handle 404
app.get('*', function(req, res, next) {
  res.status(404).render('../dist/index', {
    req: req,
    res: res
  });
});

app.listen(8000, () => {
  console.log(`Listening at ${baseUrl}`);
});
