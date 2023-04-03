import { Box, styled, CSSObject } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex'
  } as CSSObject;
});

export const CurrentInfo = styled(Box)(({ theme }) => {
  return {
    fontSize: '16px',
    color: '#053D4C',
    fontWeight: '400',
    paddingBottom: '8px',
  } as CSSObject;
});

export const ServiceInfo = styled(Box)(({ theme }) => {
  return {
    fontSize: '16px',
    color: '#001C15',
    fontWeight: '400',
    paddingBottom: '8px',
  } as CSSObject;
});



export const Block = styled(Box)(({ theme }) => {
  return {
    marginRight: '80px'
  } as CSSObject;
});
