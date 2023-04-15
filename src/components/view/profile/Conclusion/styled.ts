import { Box, styled, Typography, Button as MUIButton } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'space-between'
  };
});

export const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '8px'
  };
});

export const Text = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    textAlign: 'start'
  };
});

export const BoxInfo = styled(Box)(({ theme }) => {
  return {
    borderTop: `1px solid ${theme.palette.background.default}`,
    padding: '24px 0'
  };
});

export const Ol = styled('ol')(() => {
  return {
    paddingLeft: 24
  };
});
export const Li = styled('li')(() => {
  return {};
});

export const BoxButton = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: '10px'
  };
});
export const Button = styled(MUIButton)(() => {
  return {
    textTransform: 'none',
    fontWeight: 600
  };
});
