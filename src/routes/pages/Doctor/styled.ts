import { CSSObject, styled, Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    borderRadius: '10px',
    backgroundColor: '#f4f4f4'
  } as CSSObject;
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '90px 0 170px'
  } as CSSObject;
});
