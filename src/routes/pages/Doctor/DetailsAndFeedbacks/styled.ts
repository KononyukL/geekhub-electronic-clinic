import { Box, CSSObject, Tabs, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    maxWidth: '700px',
    width: '100%',
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.contrastText,
    marginTop: '20px'
  } as CSSObject;
});

export const Wrapper = styled(Box)(( ) => {
  return {
    display: 'flex'
  } as CSSObject;
});

export const AboutDoctor = styled(Tabs)(({ theme }) => ({
  '& .css-1c98ryv-MuiButtonBase-root-MuiTab-root.Mui-selected': {
    color: theme.palette.text.primary,
    fontWeight: 600
  },
  '& .css-1c98ryv-MuiButtonBase-root-MuiTab-root': {
    color: theme.palette.text.primary,
    fontWeight: 600,
    width: '150px',
  },
  '& .css-kqu0uj-MuiTabs-indicator': {
    height: '4px'
  }
}));
