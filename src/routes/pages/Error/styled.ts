import { styled, Box, Typography } from '@mui/material';
import { Link as RRDLink } from 'react-router-dom';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  };
});

export const Img = styled('img')(() => {
  return {
    marginBottom: 30
  };
});

export const Text = styled(Typography)(({ theme }) => {
  return {
    maxWidth: 700,
    width: '100%',
    color: theme.palette.text.primary,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40
  };
});

export const Link = styled(RRDLink)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontSize: 24,
    textDecoration: 'none',

    '&:hover': {
      color: theme.palette.primary.dark
    }
  };
});
