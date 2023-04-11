import { Box, CSSObject, styled, Pagination as MUIPagination } from '@mui/material';

export const Wrapper = styled(Box)(() => {
  return {
    minHeight: '1130px',
    height: '100%',
    marginLeft: '25px'
  } as CSSObject;
});

export const WrapperPagination = styled(Box)(({theme}) => {
  return {
    '& .css-1w19pz-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    '& .css-1w19pz-MuiButtonBase-root-MuiPaginationItem-root:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText
    },
    '& .css-1w19pz-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText
    }
  } as CSSObject;
});

export const Pagination = styled(MUIPagination)(({theme}) => {
  return {
    justifyContent: 'center',
    display: 'flex',

    '& .css-116df2z-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    '& .css-116df2z-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 0,
      width: '40px',
      height: '30px'
    },
    '& ul li:last-of-type button': {
      border: 'none'
    },'& ul li button': {
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
