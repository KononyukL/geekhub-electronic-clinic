import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh'
  };
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    maxWidth: 480,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: 40
  };
});

export const Title = styled('h1')(() => {
  return {
    display: 'flex',
    fontSize: 32,
    fontWeight: 400,
    alignItems: 'center'
  };
});

export const Img = styled('img')(() => {
  return {};
});
