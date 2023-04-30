import { styled } from '@mui/material';

export const Text = styled('p')(({ theme }) => {
  return {
    fontSize: 12,
    margin: 0,
    minHeight: '20px',
    color: theme.palette.error.main
  };
});
