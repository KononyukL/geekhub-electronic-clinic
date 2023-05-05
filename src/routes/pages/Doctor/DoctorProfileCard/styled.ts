import { Box, styled } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    maxWidth: 708,
    width: '100%',
    display: 'flex',
    padding: '40px 0 40px 40px'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 700,
    width: '100%'
  };
});
