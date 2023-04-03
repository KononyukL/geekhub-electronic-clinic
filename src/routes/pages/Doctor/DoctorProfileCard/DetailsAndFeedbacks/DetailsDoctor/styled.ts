import { Box, CSSObject, List, ListItem, styled } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    marginBottom: '30px'
  } as CSSObject;
});

export const Ul = styled(List)(({ theme }) => {
  return {
    padding: '20px'
  } as CSSObject;
});

export const Li = styled(ListItem)(({ theme }) => {
  return {
    paddingBottom: '5px'
  } as CSSObject;
});
