import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    padding: '24px',
    background: theme.palette.background.paper
  };
});
