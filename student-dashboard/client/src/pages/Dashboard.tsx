import React from 'react';
import { Grid, Container } from '@mui/material';
import ExamsSection from '../components/ExamsSection';
import requireAuth from '../hoc/requireAuth';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ExamsSection />
        </Grid>
        {/* Add more dashboard components here */}
      </Grid>
    </Container>
  );
};

export default requireAuth(Dashboard);