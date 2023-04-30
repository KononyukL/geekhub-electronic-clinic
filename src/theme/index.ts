import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#02C898',
      light: '#00B484',
      dark: '#00A070',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#053D4C',
      light: '#19756A',
      dark: '#0E3E48',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#001C15',
      secondary: '#989898'
    },
    background: {
      paper: '#FFFFFF',
      default: '#F3F3F3'
    },
    success: {
      main: '#E0E0E0',
      light: '#EAEAEA',
      dark: '#F3F3F3'
    },
    error: {
      main: '#D72A2A'
    }
  },
  typography: {
    fontFamily: 'Open Sans',
    h2: {
      fontFamily: 'Montserrat'
    }
  }
});
