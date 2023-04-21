import { Box as MUIBox, styled, Button as MUIButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const BoxLayout = styled(MUIBox)(({ theme }) => {
  return {
    maxWidth: '1420px',
    margin: '0 auto',
    width: '100%',
    backgroundColor: theme.palette.background.default
  };
});

export const BoxLink = styled(MUIBox)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 15%',
    backgroundColor: theme.palette.background.paper,
    padding: '24px',
    zIndex: 2,
    boxShadow:
      '-5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)'
  };
});
export const BoxInfo = styled(MUIBox)(() => {
  return {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 24
  };
});
export const BoxOutlet = styled(MUIBox)(() => {
  return {
    display: 'flex',
    flex: '1 0 70%'
  };
});

export const LinkProfile = styled(NavLink)(({ theme }) => {
  return {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    marginBottom: 24,
    borderLeft: `5px solid ${theme.palette.secondary.main}`,
    padding: '16px 20px',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: theme.palette.background.default,
      borderLeftColor: theme.palette.primary.main
    },
    '&:hover': {
      backgroundColor: theme.palette.success.main,
      borderLeftColor: theme.palette.secondary.light
    }
  };
});

export const Button = styled(MUIButton)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    marginTop: 30,
    justifyContent: 'flex-start',
    textTransform: 'none',
    padding: '16px 24px',
    cursor: 'pointer'
  };
});
