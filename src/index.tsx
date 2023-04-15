import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { index } from './store';
import App from './App';
import { theme } from './theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ThemeProvider } from '@mui/material';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={index}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
