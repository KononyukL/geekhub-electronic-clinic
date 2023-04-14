import { Box, styled } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex'
  };
});

export const CurrentInfo = styled(Box)(({ theme }) => {
  return {
    fontSize: 16,
    color: theme.palette.secondary.main,
    fontWeight: 400,
    paddingBottom: 8
  };
});

export const ServiceInfo = styled(Box)(({ theme }) => {
  return {
    fontSize: 16,
    color: theme.palette.text.primary,
    fontWeight: 600,
    paddingBottom: 8
  };
});

export const Img = styled('img')(() => {
  return {
    marginRight: 10
  };
});

export const Block = styled(Box)(() => {
  return {
    marginRight: 80
  };
});
