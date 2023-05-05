import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  };
});
