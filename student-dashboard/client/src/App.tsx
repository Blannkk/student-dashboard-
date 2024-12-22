import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { store } from './store';
import theme from './theme';
import {Header} from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Header />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;