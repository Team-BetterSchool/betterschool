import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Navigation from './components/Navigation';
import Copyright from './components/Copyright';
import BrowserRoutes from './components/BrowserRoutes';

// Resource: https://github.com/mui/material-ui/tree/v5.11.8/docs/data/material/getting-started/templates/dashboard

const mdTheme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Navigation />
          <Box
            component='main'
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <BrowserRoutes />
            <Copyright sx={{ pt: 4 }} />
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
