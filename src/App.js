import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Copyright from './components/Copyright';
import BrowserRoutes from './components/BrowserRoutes';

// Resource: https://github.com/mui/material-ui/tree/v5.11.8/docs/data/material/getting-started/templates/dashboard

const mdTheme = createTheme();

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location='/drafts'>{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <BrowserRoutes />
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
            <Dashboard />
            <Copyright sx={{ pt: 4 }} />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
