import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: theme.palette.background.paper,
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
    gap: '4px'
  };
});
export const Text = styled(Typography)(() => {
  return {};
});

export const WrapButton = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };
});

export const Label = styled(Typography)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontWeight: 500
  };
});
