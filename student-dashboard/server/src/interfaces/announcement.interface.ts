// src/interfaces/announcement.interface.ts
export interface IAnnouncement {
    _id?: string;
    title: string;
    content: string;
    priority: 'low' | 'medium' | 'high';
    publishDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
  }