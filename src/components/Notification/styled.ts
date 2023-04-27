import { styled, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Icon = styled('img')(({theme}) => {
  return {
    cursor: 'pointer',
    transition: '.3s',
    borderRadius: 6,

    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    }
  };
});

export const ModalMessage = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 5,
    position: 'absolute',
    width: 390,
    backgroundColor: theme.palette.background.paper,
    top: 40,
    right: 0
  };
});

export const Title = styled(Typography)(({ theme }) => {
  return {
    fontSize: 14,
    padding: '10px 10px 20px 10px',
    color: theme.palette.text.primary
  };
});

export const LinkButton = styled(Link)(({ theme }) => {
  return {
    fontSize: 14,
    fontWeight: 600,
    padding: 10,
    margin: '0 0 10px 10px',
    textDecoration: 'none',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    }
  };
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    display: 'block',
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    paddingBottom: 20
  };
});
