import { SupabaseError } from '@supabase/supabase-js';

export const handleError = (error: unknown): Error => {
  if (error instanceof Error) return error;
  if ((error as SupabaseError).message) {
    return new Error((error as SupabaseError).message);
  }
  return new Error('An unknown error occurred');
};

export const formatErrorMessage = (error: unknown): string => {
  return handleError(error).message;
};