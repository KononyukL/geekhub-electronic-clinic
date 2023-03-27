import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { index } from './store';
import App from './App';
import './index.css';
import { theme } from './theme';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={index}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
