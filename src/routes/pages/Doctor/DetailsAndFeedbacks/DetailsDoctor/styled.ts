import { Box, CSSObject, styled } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    marginBottom: '30px'
  } as CSSObject;
});

export const Ul = styled('ul')(() => {
  return {
    padding: '20px'
  } as CSSObject;
});

export const Li = styled('li')(() => {
  return {
    paddingBottom: '2px',
    marginLeft: '6px'
  } as CSSObject;
});

export const Title = styled('p')(() => {
  return {
    fontWeight: 500
  } as CSSObject;
});
