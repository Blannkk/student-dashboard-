import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Typography, Button, Box } from '@mui/material';

const ExamsSection = () => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 3, mb: 3, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          {t('examsTime')}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          "Nothing happens until something moves" - Albert Einstein
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          {t('viewExamsTips')}
        </Button>
      </Box>
      <Box component="img" src="/exam-illustration.svg" sx={{ width: 300, ml: 3 }} />
    </Paper>
  );
};

export default ExamsSection;