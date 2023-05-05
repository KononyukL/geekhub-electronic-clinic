import { styled } from '@mui/material';

export const Text = styled('p')(({theme}) => {
  return {
    fontSize: 14,
    color: theme.palette.error.main
  };
});
