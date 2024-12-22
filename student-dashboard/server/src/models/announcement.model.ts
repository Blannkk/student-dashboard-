// src/models/announcement.model.ts
import mongoose, { Schema } from 'mongoose';
import { IAnnouncement } from '../interfaces/announcement.interface';

const AnnouncementSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high'],
    required: true 
  },
  publishDate: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model<IAnnouncement>('Announcement', AnnouncementSchema);