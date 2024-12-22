// src/validators/quiz.validator.ts
import Joi from 'joi';
import { IQuiz } from '../interfaces/quiz.interface';

export const quizValidator = Joi.object<IQuiz>({
  title: Joi.string().required().min(3).max(100),
  description: Joi.string().required().min(10),
  dueDate: Joi.date().required().greater('now'),
  totalPoints: Joi.number().required().min(1),
  questions: Joi.array().items(
    Joi.object({
      questionText: Joi.string().required(),
      options: Joi.array().items(Joi.string()).min(2).required(),
      correctAnswer: Joi.number().required(),
      points: Joi.number().required().min(1)
    })
  ).min(1).required()
});