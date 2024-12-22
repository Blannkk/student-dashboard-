// src/services/quiz.service.ts
import { IQuiz } from '../interfaces/quiz.interface';
import Quiz from '../models/quiz.model';
import { ApiError } from '../middlewares/error.middleware';

export class QuizService {
  async createQuiz(quizData: IQuiz): Promise<IQuiz> {
    try {
      return await Quiz.create(quizData);
    } catch (error) {
      throw new ApiError(400, 'Failed to create quiz');
    }
  }

  async getAllQuizzes(): Promise<IQuiz[]> {
    try {
      return await Quiz.find().sort({ createdAt: -1 });
    } catch (error) {
      throw new ApiError(500, 'Failed to fetch quizzes');
    }
  }

  async getQuizById(id: string): Promise<IQuiz> {
    const quiz = await Quiz.findById(id);
    if (!quiz) {
      throw new ApiError(404, 'Quiz not found');
    }
    return quiz;
  }

  async updateQuiz(id: string, quizData: Partial<IQuiz>): Promise<IQuiz> {
    const quiz = await Quiz.findByIdAndUpdate(id, quizData, { 
      new: true, 
      runValidators: true 
    });
    if (!quiz) {
      throw new ApiError(404, 'Quiz not found');
    }
    return quiz;
  }

  async deleteQuiz(id: string): Promise<void> {
    const quiz = await Quiz.findByIdAndDelete(id);
    if (!quiz) {
      throw new ApiError(404, 'Quiz not found');
    }
  }
}