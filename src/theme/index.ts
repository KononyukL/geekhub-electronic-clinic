import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#02C898',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#053D4C',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#001C15',
      secondary: '#989898'
    },
    background: {
      paper: '#FFFFFF',
      default: '#F5F5F5'
    }
  }
});
