import { styled, Box } from '@mui/material';
import Input from '../Input';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    height: '100vh'
  };
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    maxWidth: 480,
    width: '100%',
    boxShadow: `-4px 15px 35px 0 ${theme.palette.success.main}`
  };
});

export const WrapperForm = styled(Box)(({ theme }) => {
  return {
    padding: 40,
    backgroundColor: theme.palette.background.paper
  };
});

export const InputWrapper = styled(Box)(({ theme }) => {
  return {
    display: 'grid',
    width: '100%',
    color: theme.palette.text.secondary
  };
});

export const StyledInput = styled(Input)(({ theme }) => {
  return {
    borderRadius: 0,
    height: 50,
    marginTop: 12,
    fontSize: 16,
    border: `1px solid ${theme.palette.text.primary}`
  };
});

export const Title = styled('h2')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    fontSize: 32,
    fontWeight: 400,
    marginBottom: 18
  };
});

export const Logo = styled('img')(() => {
  return {
    marginRight: 16
  };
});

export const StyledForm = styled('form')(() => {
  return {
    maxWidth: 476,
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
    height: 50,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: 600,
    fontSize: 16,
    border: 0,
    cursor: 'pointer',
    transition: ' .3s',
    marginTop: 24,

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    },

    '&:disabled': {
      backgroundColor: theme.palette.text.secondary,
      cursor: 'default'
    }
  };
});

export const WrapperImg = styled('div')(() => {
  return {
    position: 'absolute'
  };
});

export const ImgSwitcher = styled('img')(() => {
  return {
    width: 20,
    position: 'relative',
    cursor: 'pointer',
    left: 358,
    top: 26
  };
});

export const WrapperCheckbox = styled(Box)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    paddingTop: 24,

    '& .css-1ifdg01-MuiButtonBase-root-MuiCheckbox-root': {
      padding: 0
    }
  };
});

export const Text = styled('span')(() => {
  return {
    marginLeft: 6
  };
});

export const Error = styled('div')(({theme}) => {
  return {
    color: theme.palette.error.main,
    fontSize: 14,
    marginTop: 6
  }
})