import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 70%',
    padding: '24px',
    background: theme.palette.background.paper,
    marginBottom: '50px'
  };
});

export const PatientInfo = styled(Box)(({ theme }) => {
  return {
    paddingBottom: '24px',
    borderBottom: `1px solid ${theme.palette.background.default}`
  };
});
export const BoxInfo = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '24px'
  };
});

export const Info = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  };
});
export const Text = styled(Typography)(() => {
  return {};
});
export const NumberCard = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.secondary
  };
});
export const Name = styled(Typography)(() => {
  return {
    fontWeight: 600,
    fontSize: '20px'
  };
});
export const TextSpan = styled('span')(({ theme }) => {
  return {
    color: theme.palette.text.primary
  };
});
