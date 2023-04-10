import { Tab, Tabs, styled, Box as MUIBox } from '@mui/material';

export const Box = styled(MUIBox)(({ theme }) => {
  return {
    background: theme.palette.background.default,
    width: '100%',
    minHeight: '100vh'
  };
});
export const Container = styled(MUIBox)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'start',
    margin: '0 auto',
    maxWidth: '1420px',
    marginTop: 44,
    gap: 24,
    background: theme.palette.background.default,
    width: '100%'
  };
});
