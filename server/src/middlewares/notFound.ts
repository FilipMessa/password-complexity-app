import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../modules/errors';

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
  const err = new NotFoundError();
  next(err);
};
