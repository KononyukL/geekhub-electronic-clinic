import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 70%',
    background: theme.palette.background.default,
    padding: '24px'
  };
});

export const PatientInfo = styled(Box)(({ theme }) => {
  return {
    background: theme.palette.background.paper,
    padding: 24
  };
});
export const WrapInfo = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '24px'
  };
});

export const Info = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };
});
export const Text = styled(Typography)(() => {
  return {};
});
