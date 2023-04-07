import { Box, CSSObject, styled, Modal as MUIModal, Typography } from '@mui/material';

export const WrapperConfirm = styled(Box)(({ theme }) => {
  return {
    textAlign: 'center',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '362px',
    height: '224px',
    padding: '24px',
    background: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    boxShadow: '26',
    p: '20px'
  } as CSSObject;
});

export const Wrapper = styled(WrapperConfirm)(() => {
  return {
    height: '314px'
  } as CSSObject;
});

export const Date = styled('span')(({ theme }) => {
  return {
    display: 'block',
    color: theme.palette.text.primary,
    fontWeight: '600',
    fontSize: '16px',
    padding: '6px 0'
  } as CSSObject;
});

export const TitleConfirm = styled(Typography)(({ theme }) => {
  return {
    fontSize: '20px',
    color: theme.palette.text.primary,
    fontWeight: 600
  } as CSSObject;
});

export const Title = styled(TitleConfirm)(({ theme }) => {
  return {
    padding: 0,
    color: theme.palette.primary.main
  } as CSSObject;
});

export const WrapperButtons = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between'
  } as CSSObject;
});

export const ConfirmButton = styled('button')(({ theme }) => {
  return {
    width: '148px',
    height: '46px',
    fontSize: '16px',
    marginTop: '12px',
    border: 0,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    cursor: 'pointer',
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    },
  } as CSSObject;
});

export const CanselButton = styled(ConfirmButton)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,

    '&:hover': {
      backgroundColor: theme.palette.success.light
    },
    '&:active': {
      backgroundColor: theme.palette.success.main
    },
  } as CSSObject;
});

export const HomeButton = styled(ConfirmButton)(() => {
  return {
    width: '336px',
    height: '50px'
  } as CSSObject;
});

export const Modal = styled(MUIModal)(() => {
  return {
    '& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
      backgroundColor: '#021D24E5'
    }
  } as CSSObject;
});
