import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    padding: '120px 0'
  };
});

export const ContainerFeedback = styled(Box)(() => {
  return {
    width: '100%'
  };
});
export const BoxInfo = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };
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
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    fontSize: '32px',
    marginBottom: '16px'
  };
});
