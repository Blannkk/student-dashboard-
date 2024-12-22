import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Button, Typography, CircularProgress } from '@mui/material';
import { Book } from 'lucide-react';
import { useQuizzes } from '../../hooks/useQuizzes';
import { formatDistanceToNow } from 'date-fns';

export const QuizList = () => {
  const { quizzes, loading, error } = useQuizzes();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error.message}</Typography>;

  return (
    <List>
      {quizzes.map((quiz) => (
        <ListItem
          key={quiz.id}
          secondaryAction={
            <Button variant="contained" color="primary" size="small">
              Start Quiz
            </Button>
          }
        >
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <ListItemText
            primary={quiz.title}
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  {quiz.course} - {quiz.topic}
                </Typography>
                <br />
                {`Due ${formatDistanceToNow(new Date(quiz.due_date))} from now`}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};