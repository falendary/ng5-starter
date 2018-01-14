import 'zone.js/dist/zone-node';
import 'reflect-metadata';
// import 'rxjs/Rx';
import * as express from 'express';
import {platformServer, renderModuleFactory} from '@angular/platform-server';
import {Title, Meta}     from '@angular/platform-browser';
import {ServerAppModule} from './app/server-app.module';
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

app.engine('html', ngExpressEngine(
  {bootstrap: ServerAppModule}
));

app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));

ROUTES.forEach(route => {
  app.get(route, (req, res) => {

    // console.log('route', route, req);

    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');

    console.time(`GET: ${req.originalUrl}`);
    console.log(`GET: ${route}`);

    res.render('../dist/index', {

      async: false,
      preboot: true,

      req: req,
      res: res
    });

    console.timeEnd(`GET: ${req.originalUrl}`);

  });
});

// handle 404
app.get('*', function (req, res, next) {

  console.log('404?', req.originalUrl);

  res.status(404).render('../dist/index', {
    req: req,
    res: res
  });
});

app.listen(8000, () => {
  console.log(`Listening at ${baseUrl}`);
});
