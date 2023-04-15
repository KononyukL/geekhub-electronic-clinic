import { Box, styled, Modal as MUIModal, Typography } from '@mui/material';

export const WrapperConfirm = styled(Box)(({ theme }) => {
  return {
    textAlign: 'center',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '49.5%',
    transform: 'translate(-50%, -50%)',
    width: 362,
    height: 224,
    padding: 24,
    background: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    boxShadow: '26',
    p: 20
  };
});

export const Wrapper = styled(WrapperConfirm)(() => {
  return {
    height: 314
  };
});

export const Date = styled('span')(({ theme }) => {
  return {
    display: 'block',
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: 16,
    padding: '6px 0'
  };
});

export const TitleConfirm = styled(Typography)(({ theme }) => {
  return {
    fontSize: 20,
    color: theme.palette.text.primary,
    fontWeight: 600
  };
});

export const Title = styled(TitleConfirm)(({ theme }) => {
  return {
    padding: 0,
    color: theme.palette.primary.main
  };
});

export const WrapperButtons = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between'
  };
});

export const ConfirmButton = styled('button')(({ theme }) => {
  return {
    width: 148,
    height: 46,
    fontSize: 16,
    marginTop: 12,
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
    }
  };
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
    }
  };
});

export const HomeButton = styled(ConfirmButton)(() => {
  return {
    width: 336,
    height: 50
  };
});

export const Modal = styled(MUIModal)(() => {
  return {
    '& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
      backgroundColor: '#021D24E5'
    }
  };
});
