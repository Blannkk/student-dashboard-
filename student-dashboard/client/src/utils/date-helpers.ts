import { format, formatDistanceToNow as fdn } from 'date-fns';

export const formatDate = (date: string | Date): string => {
  return format(new Date(date), 'PPP');
};

export const formatDistanceToNow = (date: string | Date): string => {
  return fdn(new Date(date), { addSuffix: true });
};

export const isOverdue = (dueDate: string | Date): boolean => {
  return new Date(dueDate) < new Date();
};