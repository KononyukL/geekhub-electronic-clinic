import { Box, CSSObject, styled, Divider } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  } as CSSObject;
});

export const NameDoctor = styled(Box)(({ theme }) => {
  return {
    display: 'inline-block',
    fontWeight: '600',
    fontSize: '20px'
  } as CSSObject;
});

export const Rating = styled(Divider)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: '#001C15'
  } as CSSObject;
});
