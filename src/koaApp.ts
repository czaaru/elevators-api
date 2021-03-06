import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { router } from './routes/router';
import { getLogger } from './logger';
import { getConfig } from './config';
import { initializeState } from './state';
import { initializeElevators } from './simulation';

const LOG = getLogger(__filename);
const config = getConfig();

export const startService = (appConfig = config) => {
  initializeState({ elevators: initializeElevators() });
  const app = new Koa();

  app.use(cors());
  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.listen(appConfig.port);
  LOG.info('Listening on port %s.', appConfig.port);

  return app;
};
