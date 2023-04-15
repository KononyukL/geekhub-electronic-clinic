import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    marginBottom: 30
  };
});

export const Ul = styled('ul')(() => {
  return {
    padding: 20
  };
});

export const Li = styled('li')(() => {
  return {
    paddingBottom: 2,
    marginLeft: 6
  };
});

export const Title = styled('p')(() => {
  return {
    fontWeight: 500
  };
});
