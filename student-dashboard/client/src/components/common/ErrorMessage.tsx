import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { formatErrorMessage } from '../../utils/api-helpers';

interface ErrorMessageProps {
  error: unknown;
  title?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  error, 
  title = 'Error' 
}) => (
  <Alert severity="error">
    <AlertTitle>{title}</AlertTitle>
    {formatErrorMessage(error)}
  </Alert>
);