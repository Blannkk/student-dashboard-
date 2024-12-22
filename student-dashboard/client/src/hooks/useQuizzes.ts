import { useState, useEffect } from 'react';
import { quizService } from '../services/quizzes';
import type { Quiz } from '../types';

export const useQuizzes = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    try {
      setLoading(true);
      const data = await quizService.getAll();
      setQuizzes(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load quizzes'));
    } finally {
      setLoading(false);
    }
  };

  return {
    quizzes,
    loading,
    error,
    refresh: loadQuizzes,
  };
};