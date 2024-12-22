// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { ApiError } from './error.middleware';
import { IUser } from '../interfaces/auth.interface';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export const authMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    throw new ApiError(401, 'No authorization header');
  }

  req.user = {
    id: '1',
    isAuthenticated: true
  };

  next();
};