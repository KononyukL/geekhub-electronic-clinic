import { Box, CSSObject, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    minHeight: '1100px',
    height: '100%',
    marginLeft: '25px'
  } as CSSObject;
});


