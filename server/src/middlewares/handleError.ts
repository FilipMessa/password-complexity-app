import { AppError } from '../modules/errors';
import { Response } from 'express';
import { logger } from '../modules/logger';

export const handleError = (err: AppError, res: Response) => {
  const { statusCode, message, type } = err;
  logger.error(err.message || err.toString());
  res.status(statusCode).send({
    status: 'error',
    statusCode,
    type,
    message,
  });
};
