import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };
});
export const BoxInfo = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '24px'
  };
});
export const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
    width: '150px'
  };
});
export const Data = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary
  };
});
