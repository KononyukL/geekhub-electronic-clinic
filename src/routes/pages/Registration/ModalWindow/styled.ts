import { Box, Modal as MUIModal, styled, Typography } from '@mui/material';
import { WrapperConfirm } from 'components/ModalConfirmVisit/styled';
import { Link } from 'react-router-dom';

export const Modal = styled(MUIModal)(() => {
  return {
    '& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
      backgroundColor: '#021D24E5'
    }
  };
});

export const Wrapper = styled(WrapperConfirm)(() => {
  return {
    maxWidth: 480,
    width: '100%',
    height: 352,
    padding: 40
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
    fontSize: 30,
    color: theme.palette.text.primary
  };
});

export const WrapperButtons = styled(Box)(() => {
  return {
    margin: '54px auto 0'
  };
});

export const HomeButton = styled(Link)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.main,
    padding: '14px 158px',
    fontSize: 16,
    color: theme.palette.primary.contrastText,
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    '&:active': {
      backgroundColor: theme.palette.secondary.dark
    }
  };
});
