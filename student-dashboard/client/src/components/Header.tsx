import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  Box,
} from '@mui/material';
import { Search, Bell, Mail } from 'lucide-react';
import { RootState } from '../store';
import { logout } from '../store/authSlice';
import LanguageSwitcher from './LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {user && t('welcome', { name: user.name })}
        </Typography>
        <LanguageSwitcher />
        <Box sx={{ mx: 2 }}>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <Bell />
          </IconButton>
          <IconButton>
            <Mail />
          </IconButton>
        </Box>
        {user && (
          <>
            <Avatar src={user.avatar} sx={{ mx: 1 }} />
            <Button variant="outlined" onClick={() => dispatch(logout())}>
              {t('logout')}
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};