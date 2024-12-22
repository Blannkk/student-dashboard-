// src/routes/announcement.routes.ts
import { Router } from 'express';
import { AnnouncementController } from '../controllers/announcement.controller';
import { validate } from '../middlewares/validation.middleware.ts';
import { announcementValidator } from '../validators/announcement.validator.ts';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const announcementController = new AnnouncementController();

router.use(authMiddleware);

router.post('/', 
  validate(announcementValidator), 
  announcementController.create.bind(announcementController)
);

router.get('/', 
  announcementController.getAll.bind(announcementController)
);

router.get('/:id', 
  announcementController.getById.bind(announcementController)
);

router.put('/:id', 
  validate(announcementValidator), 
  announcementController.update.bind(announcementController)
);

router.delete('/:id', 
  announcementController.delete.bind(announcementController)
);

export default router;