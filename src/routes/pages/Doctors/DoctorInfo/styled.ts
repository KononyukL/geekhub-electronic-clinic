import { Box, styled, Typography as MUITypography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    padding: 25,
    marginBottom: 25,
    boxShadow: '-4px 15px 35px 0 #CCCCCC'
  };
});

export const WrapperWorkingHours = styled(Box)(() => {
  return {
    width: '100%',
    maxWidth: 380,
    backgroundColor: theme.palette.background.paper,
    padding: 12,
    border: '1px solid #000000'
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    paddingRight: 20
  };
});

export const Typography = styled(MUITypography)(() => {
  return {
    maxWidth: 700,
    width: '100%',
    fontWeight: 400,
    fontSize: 16,
    color: theme.palette.text.primary,
    marginBottom: 10
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
