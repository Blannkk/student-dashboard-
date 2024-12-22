import { supabase } from './supabase';
import type { Announcement } from '../types';

export const announcementService = {
  // Get all announcements
  getAll: async () => {
    const { data, error } = await supabase
      .from('announcements')
      .select(`
        *,
        author:author_id (
          id,
          email
        )
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  // Get announcement by ID
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('announcements')
      .select(`
        *,
        author:author_id (
          id,
          email
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create announcement
  create: async (announcement: Omit<Announcement, 'id' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('announcements')
      .insert(announcement)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update announcement
  update: async (id: string, announcement: Partial<Announcement>) => {
    const { data, error } = await supabase
      .from('announcements')
      .update(announcement)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete announcement
  delete: async (id: string) => {
    const { error } = await supabase
      .from('announcements')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};