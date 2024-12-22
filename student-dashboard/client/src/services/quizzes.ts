import { supabase } from './supabase';
import type { Quiz } from '../types';

export const quizService = {
  // Get all quizzes
  getAll: async () => {
    const { data, error } = await supabase
      .from('quizzes')
      .select('*')
      .order('due_date', { ascending: true });

    if (error) throw error;
    return data;
  },

  // Get quiz by ID
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('quizzes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create quiz
  create: async (quiz: Omit<Quiz, 'id' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('quizzes')
      .insert(quiz)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update quiz
  update: async (id: string, quiz: Partial<Quiz>) => {
    const { data, error } = await supabase
      .from('quizzes')
      .update(quiz)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Delete quiz
  delete: async (id: string) => {
    const { error } = await supabase
      .from('quizzes')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};