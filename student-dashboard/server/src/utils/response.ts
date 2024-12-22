// src/utils/response.ts
import { Response } from 'express';

export class ResponseUtil {
  sendSuccess(
    res: Response,
    statusCode: number,
    message: string,
    data?: any
  ) {
    res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  sendError(
    res: Response,
    statusCode: number,
    message: string
  ) {
    res.status(statusCode).json({
      success: false,
      message
    });
  }
}