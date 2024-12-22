import { useState, useEffect } from 'react';
import { announcementService } from '../services/announcements';
import type { Announcement } from '../types';

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const loadAnnouncements = async () => {
    try {
      setLoading(true);
      const data = await announcementService.getAll();
      setAnnouncements(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load announcements'));
    } finally {
      setLoading(false);
    }
  };

  return {
    announcements,
    loading,
    error,
    refresh: loadAnnouncements,
  };
};