import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh'
  };
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    textAlign: 'center',
    maxWidth: 476,
    width: '100%',
    height: 200,
    backgroundColor: theme.palette.background.paper,
    padding: 40
  };
});

export const Text = styled(Typography)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    fontSize: 22,
    marginBottom: 38
  };
});

export const Button = styled(Link)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.main,
    padding: '14px 98px',
    fontSize: 16,
    color: theme.palette.primary.contrastText,
    transition: '.3s',
    textDecoration: 'none',
    fontWeight: 600,

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    }
  };
});

export const Img = styled('img')(() => {
  return {};
});
