import { Box, styled, CSSObject } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex'
  } as CSSObject;
});

export const CurrentInfo = styled(Box)(({ theme }) => {
  return {
    fontSize: '16px',
    color: theme.palette.secondary.main,
    fontWeight: '400',
    paddingBottom: '8px'
  } as CSSObject;
});

export const ServiceInfo = styled(Box)(({ theme }) => {
  return {
    fontSize: '16px',
    color: theme.palette.text.primary,
    fontWeight: '600',
    paddingBottom: '8px'
  } as CSSObject;
});

export const Img = styled('img')(() => {
  return {
    marginRight: '10px'
  } as CSSObject;
});

export const Block = styled(Box)(() => {
  return {
    marginRight: '80px'
  } as CSSObject;
});
