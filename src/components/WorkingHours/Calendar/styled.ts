import { Box, CSSObject, styled } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '322px',
    width: '100%',
    marginBottom: '8px',
    margin: '0 auto'
  } as CSSObject;
});

export const ButtonSwitch = styled(Box)(({ theme }) => {
  return {
    backgroundColor: 'none',
    color: 'black',
    cursor: 'pointer',
    padding: '10px',
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.success.dark
    }
  } as CSSObject;
});

export const Date = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    margin: '0 5px 0 5px',
    color: theme.palette.text.secondary,

    '&:hover': {
      cursor: 'pointer'
    }
  } as CSSObject;
});

export const Day = styled(Box)(({ theme }) => {
  return {
    width: '72px',
    fontSize: '16px',
    fontWeight: '400',

    '&.active': {
      color: theme.palette.text.primary,
      fontWeight: '500'
    }
  } as CSSObject;
});
