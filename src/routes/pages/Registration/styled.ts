import { styled, Box, Typography } from '@mui/material';
import Input from '../../../components/Input';
import { Link as DOMLink } from 'react-router-dom';

export const Container = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    height: '100vh'
  };
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    maxWidth: '588px',
    width: '100%',
    margin: '65px auto 0',
    boxShadow: `-4px 15px 35px 0 ${theme.palette.success.main}`
  };
});

export const WrapperForm = styled(Box)(({ theme }) => {
  return {
    padding: '56px',
    backgroundColor: theme.palette.background.paper
  };
});

export const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'grid',
    width: '100%',
    marginTop: 16,
    color: theme.palette.text.secondary
  };
});
export const StyledInput = styled(Input)(() => {
  return {
    borderRadius: 0,
    height: '50px',
    marginTop: 12
  };
});

export const Title = styled('h2')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    fontSize: 32,
    fontWeight: 400,
    marginBottom: 22
  };
});

export const Logo = styled('img')(() => {
  return {
    marginRight: 16
  };
});

export const ErrorText = styled('p')(() => {
  return {
    fontSize: '16px',
    color: 'red'
  };
});

export const StyledForm = styled('form')(() => {
  return {
    maxWidth: '476px',
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    margin: '0 auto'
  };
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
    },

    '&:disabled': {
      backgroundColor: theme.palette.text.secondary,
      cursor: 'not-allowed',
    },
  };
});

export const TextLogin = styled(Typography)(() => {
  return {
    margin: '24px 0 24px'
  };
});

export const TextConfidence = styled(Typography)(({ theme }) => {
  return {
    marginTop: 16,
    color: theme.palette.text.secondary
  };
});

export const Link = styled(DOMLink)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    transition: '.3s',

    '&:hover': {
      color: theme.palette.primary.dark
    }
  };
});

export const WrapperImg = styled('div')(() => {
  return {
    position: 'absolute'
  }
})
export const ImgSwitcher = styled('img')(() => {
  return {
    width: 20,
    position: 'relative',
    cursor: 'pointer',
    left: '442px',
    bottom: '36px'
  };
});
