import bodyParser from 'body-parser';
import cors from 'cors';
import { Express } from 'express';
import helmet from 'helmet';

import { httpLogger } from './httpLogger';

export const setGlobalMiddlewares = (app: Express) => {
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(httpLogger);
};
