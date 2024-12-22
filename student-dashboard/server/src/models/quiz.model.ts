// src/models/quiz.model.ts
import mongoose, { Schema } from 'mongoose';
import { IQuiz } from '../interfaces/quiz.interface';

const QuestionSchema = new Schema({
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: Number, required: true },
  points: { type: Number, required: true }
});

const QuizSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  totalPoints: { type: Number, required: true },
  questions: { type: [QuestionSchema], required: true }
}, { timestamps: true });

export default mongoose.model<IQuiz>('Quiz', QuizSchema);