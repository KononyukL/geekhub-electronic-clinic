import { Box, styled, Typography } from '@mui/material';
import { Link as DOMLink } from 'react-router-dom';

export const Container = styled(Box)(() => {
  return {
    textAlign: 'center',
    margin: '0 auto'
  };
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    marginTop: 16,
    color: theme.palette.text.secondary
  };
});

export const Login = styled(Typography)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 16,
    color: theme.palette.primary.main,
    borderTop: `1px solid ${theme.palette.background.default}`
  };
});

export const Link = styled(DOMLink)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    transition: '.3s',

    '&:hover': {
      color: theme.palette.primary.dark
    }
  };
});


