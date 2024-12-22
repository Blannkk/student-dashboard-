// src/controllers/quiz.controller.ts
import { Request, Response, NextFunction } from 'express';
import { QuizService } from '../services/quiz.service';
import { ResponseUtil } from '../utils/response';

export class QuizController {
  private quizService: QuizService;
  private responseUtil: ResponseUtil;

  constructor() {
    this.quizService = new QuizService();
    this.responseUtil = new ResponseUtil();
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const quiz = await this.quizService.createQuiz(req.body);
      this.responseUtil.sendSuccess(res, 201, 'Quiz created successfully', quiz);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const quizzes = await this.quizService.getAllQuizzes();
      this.responseUtil.sendSuccess(res, 200, 'Quizzes fetched successfully', quizzes);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const quiz = await this.quizService.getQuizById(req.params.id);
      this.responseUtil.sendSuccess(res, 200, 'Quiz fetched successfully', quiz);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const quiz = await this.quizService.updateQuiz(req.params.id, req.body);
      this.responseUtil.sendSuccess(res, 200, 'Quiz updated successfully', quiz);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.quizService.deleteQuiz(req.params.id);
      this.responseUtil.sendSuccess(res, 200, 'Quiz deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}