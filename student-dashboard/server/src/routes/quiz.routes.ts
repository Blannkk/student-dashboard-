// src/routes/quiz.routes.ts
import { Router } from 'express';
import { QuizController } from '../controllers/quiz.controller';
import { validate } from '../middlewares/validation.middleware';
import { quizValidator } from '../validators/quiz.validator';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const quizController = new QuizController();

router.use(authMiddleware);

router.post('/', validate(quizValidator), quizController.create.bind(quizController));
router.get('/', quizController.getAll.bind(quizController));
router.get('/:id', quizController.getById.bind(quizController));
router.put('/:id', validate(quizValidator), quizController.update.bind(quizController));
router.delete('/:id', quizController.delete.bind(quizController));

export default router;