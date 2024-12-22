// src/services/announcement.service.ts
import { IAnnouncement } from '../interfaces/announcement.interface';
import Announcement from '../models/announcement.model';
import { ApiError } from '../middlewares/error.middleware';

export class AnnouncementService {
  async createAnnouncement(announcementData: IAnnouncement): Promise<IAnnouncement> {
    try {
      return await Announcement.create(announcementData);
    } catch (error) {
      throw new ApiError(400, 'Failed to create announcement');
    }
  }

  async getAllAnnouncements(): Promise<IAnnouncement[]> {
    try {
      return await Announcement.find().sort({ publishDate: -1 });
    } catch (error) {
      throw new ApiError(500, 'Failed to fetch announcements');
    }
  }

  async getAnnouncementById(id: string): Promise<IAnnouncement> {
    const announcement = await Announcement.findById(id);
    if (!announcement) {
      throw new ApiError(404, 'Announcement not found');
    }
    return announcement;
  }

  async updateAnnouncement(id: string, announcementData: Partial<IAnnouncement>): Promise<IAnnouncement> {
    const announcement = await Announcement.findByIdAndUpdate(id, announcementData, { 
      new: true, 
      runValidators: true 
    });
    if (!announcement) {
      throw new ApiError(404, 'Announcement not found');
    }
    return announcement;
  }

  async deleteAnnouncement(id: string): Promise<void> {
    const announcement = await Announcement.findByIdAndDelete(id);
    if (!announcement) {
      throw new ApiError(404, 'Announcement not found');
    }
  }
}