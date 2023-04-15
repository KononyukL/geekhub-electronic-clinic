import { Box, Tabs, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    maxWidth: 700,
    width: '100%',
    borderRadius: 10,
    backgroundColor: theme.palette.primary.contrastText,
    marginTop: 20
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex'
  };
});

export const AboutDoctor = styled(Tabs)(({ theme }) => ({
  '& .css-1c98ryv-MuiButtonBase-root-MuiTab-root.Mui-selected': {
    color: theme.palette.text.primary,
    fontWeight: 600
  },
  '& .css-1c98ryv-MuiButtonBase-root-MuiTab-root': {
    color: theme.palette.text.primary,
    fontWeight: 600,
    width: 150
  },
  '& .css-kqu0uj-MuiTabs-indicator': {
    height: 4
  }
}));
