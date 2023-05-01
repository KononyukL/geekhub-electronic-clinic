import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh'
  };
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    textAlign: 'center',
    width: 400,
    height: 150,
    backgroundColor: theme.palette.background.paper,
    paddingTop: 24
  };
});

export const Text = styled(Typography)(({ theme }) => {
  return {
    fontSize: 20,
    color: theme.palette.primary.main,
    marginBottom: 22
  };
});

export const Button = styled(Link)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.main,
    padding: '14px 68px',
    fontSize: 16,
    color: theme.palette.primary.contrastText,
    transition: '.3s',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    }
  };
});
