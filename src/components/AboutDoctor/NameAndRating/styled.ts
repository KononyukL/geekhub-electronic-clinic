import { Box, CSSObject, styled } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  } as CSSObject;
});

export const NameDoctor = styled(Box)(() => {
  return {
    display: 'inline-block',
    fontWeight: '600',
    fontSize: '20px'
  } as CSSObject;
});

export const Rating = styled('span')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: theme.palette.text.primary
  } as CSSObject;
});

export const Img = styled('img')(() => {
  return {
    textAlign: 'center',
    verticalAlign: 'baseline',
    paddingLeft: '6px'
  } as CSSObject
})
