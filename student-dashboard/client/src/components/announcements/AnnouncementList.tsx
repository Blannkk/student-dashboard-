import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, CircularProgress } from '@mui/material';
import { useAnnouncements } from '../../hooks/useAnnouncements';
import { formatDistanceToNow } from 'date-fns';

export const AnnouncementList = () => {
  const { announcements, loading, error } = useAnnouncements();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error.message}</Typography>;

  return (
    <List>
      {announcements.map((announcement) => (
        <ListItem key={announcement.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>{announcement.author.name[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={announcement.title}
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  {announcement.author.name}
                </Typography>
                {` - ${formatDistanceToNow(new Date(announcement.created_at))} ago`}
                <Typography variant="body2" color="text.secondary">
                  {announcement.content}
                </Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};