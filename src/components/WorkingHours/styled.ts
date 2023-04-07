import { Box, CSSObject, styled } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    maxWidth: '602px',
    width: '100%',
    textAlign: 'center',
    margin: '0 auto'
  } as CSSObject;
});

export const TimeButton = styled('button')(({ theme }) => {
  return {
    width: '74px',
    height: '40px',
    padding: '10px 16px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    margin: '6px',
    border: 0,
    cursor: "pointer",
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    }
  } as CSSObject;
});

export const SwitcherButton = styled('button')(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    border: '0',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    margin: '20px 0 20px 0',
    fontSize: '14px',

    '&:hover': {
      color: theme.palette.text.primary
    }
  } as CSSObject;
});

export const Img = styled('img')(() => {
  return {
    textAlign: "center",
    verticalAlign: 'text-top'
  } as CSSObject
})