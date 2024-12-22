import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import {
  Home,
  Calendar,
  Book,
  GraduationCap,
  LineChart,
  Bell,
} from 'lucide-react';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  '& .MuiListItem-root': {
    transition: 'all 0.2s ease-in-out',
  },
  '&:hover .MuiListItem-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '& .MuiListItemIcon-root, & .MuiListItemText-root': {
      color: 'white',
    },
  },
  '&.active .MuiListItem-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    '& .MuiListItemIcon-root, & .MuiListItemText-root': {
      color: 'white',
    },
  },
}));

const Sidebar = () => {
  const { t } = useTranslation();

  const menuItems = [
    { icon: <Home />, label: t('dashboard'), path: '/' },
    { icon: <Calendar />, label: t('schedule'), path: '/schedule' },
    { icon: <Book />, label: t('courses'), path: '/courses' },
    { icon: <GraduationCap />, label: t('gradebook'), path: '/gradebook' },
    { icon: <LineChart />, label: t('performance'), path: '/performance' },
    { icon: <Bell />, label: t('announcement'), path: '/announcements' },
  ];

  return (
    <List sx={{ width: 240, bgcolor: '#1e4d6b' }}>
      {menuItems.map((item) => (
        <StyledNavLink key={item.path} to={item.path}>
          <ListItem>
            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label}
              sx={{ 
                '& .MuiListItemText-primary': {
                  color: 'white'
                }
              }} 
            />
          </ListItem>
        </StyledNavLink>
      ))}
    </List>
  );
};

export default Sidebar;