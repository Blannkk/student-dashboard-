// src/utils/logger.ts
export class Logger {
    info(message: string, ...args: any[]) {
      console.log(`[INFO] ${message}`, ...args);
    }
  
    error(message: string, ...args: any[]) {
      console.error(`[ERROR] ${message}`, ...args);
    }
  
    warn(message: string, ...args: any[]) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  }