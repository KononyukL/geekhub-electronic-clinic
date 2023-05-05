import {
  styled,
  Box,
  Container as MUIContainer,
  Button as MUIButton,
  Rating as MUIRating
} from '@mui/material';

export const Container = styled(MUIContainer)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh'
  };
});

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    maxWidth: 650,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  };
});

export const Title = styled('h4')(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
    fontSize: 16,
    fontWeight: 400,
    margin: '0 0 6px 0'
  };
});

export const TitleRating = styled(Title)(({ theme }) => {
  return {
    color: theme.palette.text.primary
  };
});

export const Doctor = styled(Title)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    fontSize: 20,
    fontWeight: 600
  };
});

export const DoctorRation = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between'
  };
});

export const Comment = styled('textarea')(() => {
  return {
    maxWidth: 584,
    width: '100%',
    padding: '10px 10px 120px 10px',
    fontSize: 16,
    boxSizing: 'border-box',
    fontFamily: 'Open sans',
    resize: 'none',
    overflow: 'hidden'
  };
});

export const Button = styled(MUIButton)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    borderRadius: 0,
    textTransform: 'capitalize',
    width: 200,
    height: 50,
    margin: '16px 32px 32px 32px',
    fontSize: 16,
    fontWeight: 600,

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    },

    '&:disabled': {
      backgroundColor: theme.palette.text.secondary,
      color: theme.palette.primary.contrastText,
    }
  };
});

export const Rating = styled(MUIRating)(({ theme }) => {
  return {
    color: theme.palette.primary.main
  };
});

