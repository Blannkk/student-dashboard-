// src/config/database.config.ts
import mongoose from 'mongoose';
import { Logger } from '../utils/logger';

export class Database {
  private logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  async connect(): Promise<void> {
    try {
      const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/student-dashboard';
      await mongoose.connect(uri);
      this.logger.info('Connected to MongoDB successfully');
    } catch (error) {
      this.logger.error('MongoDB connection error:', error);
      process.exit(1);
    }
  }
}