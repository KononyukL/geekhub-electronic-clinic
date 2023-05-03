import { Box, styled, Typography as MUITypography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    padding: 25,
    marginBottom: 25,
    boxShadow: '-4px 15px 35px 0 #CCCCCC',
    backgroundColor: theme.palette.background.paper
  };
});

export const WrapperWorkingHours = styled(Box)(({ theme }) => {
  return {
    width: '100%',
    maxWidth: 380,
    maxHeight: 390,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: 12,
    border: `1px solid ${theme.palette.text.primary}`
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    paddingRight: 20
  };
});

export const Typography = styled(MUITypography)(({ theme }) => {
  return {
    maxWidth: 616,
    width: '100%',
    fontSize: 16,
    color: theme.palette.text.primary,
    marginBottom: 10,
    transition: '.3s',

    '&:hover': {
      transition: '.3s',
      color: theme.palette.text.secondary,
      cursor: 'pointer'
    }
  };
});

export const AboutMoreInfo = styled(NavLink)(() => {
  return {
    color: theme.palette.text.secondary,
    fontSize: 14,

    '&:hover': {
      color: 'black'
    }
  };
});
