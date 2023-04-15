import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    maxWidth: '816px',
    columnGap: '10px'
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
