import { CSSObject, styled, Box } from '@mui/material';

export const Container = styled(Box)(() => {
  return {
    maxWidth: '1420px',
    margin: '0 auto'
  } as CSSObject;
});

export const ProfileDoctor = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `-4px 15px 35px 0 ${theme.palette.success.main}`
  } as CSSObject;
});

export const Wrapper = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '60px 0 170px',
  } as CSSObject;
});

export const WrapperWorkingHours = styled(Box)(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '650px',
    minHeight: '244px',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    margin: '40px',
    padding: '12px',
    border: `1px solid ${theme.palette.text.primary}`
  } as CSSObject;
});
