import { Box, CSSObject, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    padding: '25px',
    borderRadius: '10px',
    marginBottom: '25px'
  } as CSSObject;
});

export const Wrapper = styled(Box)(({theme}) => {
  return {
    maxWidth: '700px',
    width: '100%',
    paddingBottom: '60px'
  } as CSSObject;
});
