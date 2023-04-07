import { styled, CSSObject, Box } from '@mui/material';
import Input from '../../../components/Input';

export const Container = styled(Box)(({ theme }) => {
  return {
    maxWidth: '588px',
    width: '100%',
    margin: '0 auto',
    boxShadow: `-4px 15px 35px 0 ${theme.palette.success.main}`
  } as CSSObject;
});

export const StyledInput = styled(Input)(() => {
  return {
    borderRadius: 0,
    height: '50px',
  } as CSSObject;
});

export const Wrapper = styled(Box)(() => {
  return {
    padding: '56px'
  } as CSSObject;
});

export const ErrorText = styled('p')(() => {
  return {
    fontSize: '16px',
    color: 'red'
  } as CSSObject;
});

export const StyledForm = styled('form')(() => {
  return {
    maxWidth: '476px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto'
  } as CSSObject;
});

export const StyledWrapper = styled(Box)(() => {
  return {
    width: '100%',
  } as CSSObject;
});

export const ButtonSubmit = styled('button')(({ theme }) => {
  return {
    width: '100%',
    height: '54px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: 600,
    fontSize: '16px',
    border: 0,
    cursor: 'pointer',
    transition: ' .3s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    }
  } as CSSObject;
});
