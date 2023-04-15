import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: 602,
    width: '100%',
    textAlign: 'center',
    margin: '0 auto'
  };
});

export const TimeButton = styled('button')(({ theme }) => {
  return {
    width: 74,
    height: 40,
    padding: '10px 16px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    margin: 6,
    border: 0,
    cursor: 'pointer',
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    }
  };
});

export const SwitcherButton = styled('button')(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    border: 0,
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    margin: '20px 0 20px 0',
    fontSize: 14,

    '&:hover': {
      color: theme.palette.text.primary
    }
  };
});

export const Img = styled('img')(() => {
  return {
    textAlign: 'center',
    verticalAlign: 'text-top'
  };
});
