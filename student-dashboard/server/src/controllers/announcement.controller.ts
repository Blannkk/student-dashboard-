// src/controllers/announcement.controller.ts
import { Request, Response, NextFunction } from 'express';
import { AnnouncementService } from '../services/announcement.service.ts';
import { ResponseUtil } from '../utils/response';

export class AnnouncementController {
  private announcementService: AnnouncementService;
  private responseUtil: ResponseUtil;

  constructor() {
    this.announcementService = new AnnouncementService();
    this.responseUtil = new ResponseUtil();
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const announcement = await this.announcementService.createAnnouncement(req.body);
      this.responseUtil.sendSuccess(res, 201, 'Announcement created successfully', announcement);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const announcements = await this.announcementService.getAllAnnouncements();
      this.responseUtil.sendSuccess(res, 200, 'Announcements fetched successfully', announcements);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const announcement = await this.announcementService.getAnnouncementById(req.params.id);
      this.responseUtil.sendSuccess(res, 200, 'Announcement fetched successfully', announcement);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const announcement = await this.announcementService.updateAnnouncement(req.params.id, req.body);
      this.responseUtil.sendSuccess(res, 200, 'Announcement updated successfully', announcement);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.announcementService.deleteAnnouncement(req.params.id);
      this.responseUtil.sendSuccess(res, 200, 'Announcement deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}