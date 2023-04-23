import { styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    maxWidth: 1420,
    width: '100%',
    margin: '0 auto'
  };
});

export const ProfileDoctor = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `-4px 15px 35px 0 ${theme.palette.success.main}`
  };
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 170
  };
});

export const WrapperWorkingHours = styled(Box)(({ theme }) => {
  return {
    width: '100%',
    maxWidth: 626,
    minHeight: 244,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    margin: 40,
    padding: 12,
    border: `1px solid ${theme.palette.text.primary}`
  };
});
