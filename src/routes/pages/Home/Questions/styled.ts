import { Box, styled, Typography, Accordion as MUIAccordion } from '@mui/material';

export const Container = styled(Box)({
  background: 'transparent',
  maxWidth: 1480,
  margin: '0 auto',
  padding: '120px 30px'
});

export const BoxTitle = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 56
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

export const BoxAccordion = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

export const Accordion = styled(MUIAccordion)(({ theme }) => {
  return {
    '&:before': {
      backgroundColor: 'transparent'
    },
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      '-5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)',
    marginBottom: '24px',
    padding: '10px',
    width: 930
  };
});

export const TypographyQuestion = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: '20px'
  };
});
export const TypographyText = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary
  };
});
