import { Box as MUIBox, Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)({
  background: 'transparent',
  maxWidth: 1480,
  margin: '0 auto',
  marginBottom: 120,
  padding: '0 30px'
});

export const BoxInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});
export const FirstTitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontWight: 600,
    fontSize: '20px',
    marginBottom: '8px'
  };
});

export const LastTitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: '32px',
    marginBottom: '16px'
  };
});

export const Text = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    marginBottom: '32px',
    textAlign: 'center',
    maxWidth: 695,
    height: 75
  };
});

export const BoxCard = styled(MUIBox)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 24,
  marginTop: 56
});
