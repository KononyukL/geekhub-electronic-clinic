import { Box, Divider, styled } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    minHeight: 740,
    height: '100%'
  };
});

export const Feedbacks = styled(Box)(() => {
  return {
    paddingTop: 36
  };
});

export const StyledBox = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 24
  };
});

export const NameDoctor = styled('h2')(({ theme }) => {
  return {
    display: 'inline-block',
    color: theme.palette.text.primary,
    fontSize: 16,
    paddingBottom: 6
  };
});

export const Feedback = styled('p')(() => {
  return {
    marginBottom: 70
  };
});

export const Date = styled(Box)(({ theme }) => {
  return {
    fontSize: 16,
    color: theme.palette.text.secondary
  };
});

export const HorizontalLine = styled(Divider)(({ theme }) => {
  return {
    color: theme.palette.text.secondary
  };
});

export const PaginationWrapper = styled(Box)(({ theme }) => {
  return {
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 24,

    '& .css-1z03zik-MuiButtonBase-root-MuiPaginationItem-root:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.light
    },
    '& .css-1z03zik-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.light
    },
    '& .css-1z03zik-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.main
    },
    '& .css-71muvu-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 0,
      width: 40,
      height: 30
    },
    '& ul li:last-of-type button': {
      border: 'none'
    },
    '& ul li button': {
      border: '1px solid black',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 0,
      width: 40,
      height: 30
    },
    '& ul li:first-of-type button': {
      border: 'none'
    }
  };
});
