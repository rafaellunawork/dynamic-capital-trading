import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export function errorHandler(err: AppError, _req: Request, res: Response, _next: NextFunction) {
  const statusCode = err.statusCode || 500;
  const isProduction = env.nodeEnv === 'production';

  console.error(`[ERROR] ${err.message}`, isProduction ? '' : err.stack);

  res.status(statusCode).json({
    success: false,
    message: isProduction && statusCode === 500 ? 'Internal server error' : err.message,
    ...(isProduction ? {} : { stack: err.stack }),
  });
}
