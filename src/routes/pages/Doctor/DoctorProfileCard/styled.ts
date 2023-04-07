import { Box, CSSObject, styled } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    maxWidth: '700px',
    width: '100%',
    display: 'flex',
    padding: '40px 0 40px 40px',
  } as CSSObject;
});

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: '700px',
    width: '100%',
    paddingBottom: '60px'
  } as CSSObject;
});
