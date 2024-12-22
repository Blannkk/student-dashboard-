// src/controllers/auth.controller.ts
import { Request, Response } from 'express';
import { ResponseUtil } from '../utils/response';

export class AuthController {
  private responseUtil: ResponseUtil;

  constructor() {
    this.responseUtil = new ResponseUtil();
  }

  async login(req: Request, res: Response) {
    this.responseUtil.sendSuccess(res, 200, 'Logged in successfully', {
      isAuthenticated: true
    });
  }

  async logout(req: Request, res: Response) {
    this.responseUtil.sendSuccess(res, 200, 'Logged out successfully', {
      isAuthenticated: false
    });
  }

  async checkAuth(req: Request, res: Response) {
    this.responseUtil.sendSuccess(res, 200, 'Auth check successful', {
      isAuthenticated: true
    });
  }
}