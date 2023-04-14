import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8
  };
});

export const NameDoctor = styled(Box)(() => {
  return {
    display: 'inline-block',
    fontWeight: 600,
    fontSize: 20
  };
});

export const Rating = styled('span')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: theme.palette.text.primary
  };
});

export const Img = styled('img')(() => {
  return {
    textAlign: 'center',
    verticalAlign: 'baseline',
    paddingLeft: 6
  };
});
