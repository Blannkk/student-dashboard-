// src/config/app.config.ts
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from '../middlewares/error.middleware';
import quizRoutes from '../routes/quiz.routes';
import announcementRoutes from '../routes/announcement.routes';
import authRoutes from '../routes/auth.routes';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares(): void {
    this.app.use(helmet());
    this.app.use(cors({
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      credentials: true
    }));
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private initializeRoutes(): void {
    this.app.use('/api/auth', authRoutes);
    this.app.use('/api/quizzes', quizRoutes);
    this.app.use('/api/announcements', announcementRoutes);
  }

  private initializeErrorHandling(): void {
    this.app.use(errorHandler);
  }
}