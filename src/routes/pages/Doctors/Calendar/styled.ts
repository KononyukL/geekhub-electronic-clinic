import { Box, CSSObject, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',

  } as CSSObject;
});

export const ButtonSwitch = styled(Box)(({ theme }) => {
  return {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'black',
    cursor: 'pointer',
    padding: '10px',

    '&:hover': {
      backgroundColor: 'rgba(192, 192, 192, 0.29)'
    }
  } as CSSObject;
});

export const Data = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    margin: '0 5px 0 5px',
    color: '#989898',

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
      color: '#000000',
      fontWeight: '500'
    }
  } as CSSObject;
});
