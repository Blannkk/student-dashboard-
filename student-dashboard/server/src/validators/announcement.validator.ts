// src/validators/announcement.validator.ts
import Joi from 'joi';
import { IAnnouncement } from '../interfaces/announcement.interface';

export const announcementValidator = Joi.object<IAnnouncement>({
  title: Joi.string().required().min(3).max(100),
  content: Joi.string().required().min(10),
  priority: Joi.string().valid('low', 'medium', 'high').required(),
  publishDate: Joi.date().required()
});