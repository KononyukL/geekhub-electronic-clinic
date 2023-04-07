import { Box, CSSObject, Divider, styled } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    minHeight: '740px',
    height: '100%'
  } as CSSObject;
});

export const Feedbacks = styled(Box)(() => {
  return {
    paddingTop: '36px'
  } as CSSObject;
});

export const StyledBox = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px'
  } as CSSObject;
});

export const NameDoctor = styled('h2')(({ theme }) => {
  return {
    display: 'inline-block',
    color: theme.palette.text.primary,
    fontSize: '16px',
    paddingBottom: '6px'
  } as CSSObject;
});

export const Feedback = styled('p')(() => {
  return {
    marginBottom: '70px'
  } as CSSObject;
});

export const Date = styled(Box)(({ theme }) => {
  return {
    fontSize: '16px',
    color: theme.palette.text.secondary
  } as CSSObject;
});

export const HorizontalLine = styled(Divider)(({theme}) => {
  return {
    color: theme.palette.text.secondary
  } as CSSObject;
});

export const PaginationWrapper = styled(Box)(({ theme }) => {
  return {
    justifyContent: 'center',
    display: 'flex',
    paddingTop: '24px',

    '& .css-1z03zik-MuiButtonBase-root-MuiPaginationItem-root:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.light,
    },
    '& .css-1z03zik-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.main
    },
    '& .css-71muvu-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 0,
      width: '40px',
      height: '30px'
    },
    '& ul li:last-of-type button': {
      border: 'none'
    },
    '& ul li button': {
      border: '1px solid black',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 0,
      width: '40px',
      height: '30px'
    },
    '& ul li:first-of-type button': {
      border: 'none'
    }
  } as CSSObject;
});
