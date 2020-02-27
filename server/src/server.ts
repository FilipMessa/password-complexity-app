import express, { NextFunction, Request, Response } from 'express';
import { handleError, notFound, setGlobalMiddlewares } from './middlewares';
import { AppError } from './modules/errors';
import passwordComplexity from './routes/passwordComplexity';

export const server = express();

setGlobalMiddlewares(server);

server.use('/password-complexity', passwordComplexity);

server.use(notFound);
server.use((err: AppError, _req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
  next();
});
