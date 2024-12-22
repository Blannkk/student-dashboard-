// src/routes/auth.routes.ts
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

router.post('/login', authController.login.bind(authController));
router.post('/logout', authController.logout.bind(authController));
router.get('/check', authController.checkAuth.bind(authController));

export default router;