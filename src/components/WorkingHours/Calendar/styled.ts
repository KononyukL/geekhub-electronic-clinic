import { Box, styled } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: 530,
    width: '100%',
    marginBottom: 8,
    margin: '0 auto'
  };
});

export const ButtonSwitch = styled(Box)(({ theme }) => {
  return {
    backgroundColor: 'none',
    color: 'black',
    cursor: 'pointer',
    padding: 10,
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.success.dark
    }
  };
});

export const DateStyle = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    margin: '0 5px 0 5px',
    color: theme.palette.text.secondary,

    '&:hover': {
      cursor: 'pointer'
    },
    '&.active': {
      color: theme.palette.text.primary,
      fontWeight: '500'
    }
  };
});

export const Day = styled(Box)(({ theme }) => {
  return {
    textAlign: 'center',
    width: 88,
    fontSize: 14,
    fontWeight: 400,
    transition: '.3s',

    '&:hover': {
      color: theme.palette.text.primary
    }
  };
});
