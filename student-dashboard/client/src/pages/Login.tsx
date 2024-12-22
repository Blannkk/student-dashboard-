import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { login } from '../store/authSlice';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(
      login({
        id: '1',
        name: 'Talia',
        avatar: 'https://i.pravatar.cc/150?u=talia',
      })
    );
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Typography component="h1" variant="h5">
          {t('login')}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
        >
          {t('login')}
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;