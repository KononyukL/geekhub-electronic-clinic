import { Box, Button, CSSObject, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '380px',
    backgroundColor: '#ffffff',
    padding: '12px',
    border: '1px solid #000000'
  } as CSSObject;
});

export const Wrapper = styled(Box)(({ theme }) => {
  return { textAlign: 'center' } as CSSObject;
});

export const TimeButton = styled(Button)(({ theme }) => {
  return {
    width: '74px',
    height: '40px',
    padding: '10px 16px',
    color: '#FFFFFF',
    backgroundColor: '#053D4C',
    borderRadius: 0,
    margin: '6px',

    '&:hover': {
      backgroundColor: '#02C898'
    }
  } as CSSObject;
});
