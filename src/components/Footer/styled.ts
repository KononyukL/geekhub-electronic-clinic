import { Box as MUIBox, styled, Typography as MUITypography } from '@mui/material';
import { Link } from 'react-router-dom';

export const BoxFooter = styled(MUIBox)(({ theme }) => {
  return {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  };
});
export const Box = styled(MUIBox)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1480,
    margin: '0px auto',
    padding: '100px 30px 42px'
  };
});

export const TypographyTitle = styled(MUITypography)({
  fontSize: 20,
  fontWeight: 600,
  marginBottom: 24
});

export const BoxInfo = styled(MUIBox)({
  display: 'flex',
  flexDirection: 'column'
});

export const BoxSmall = styled(MUIBox)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: `1px solid ${theme.palette.secondary.contrastText}`,
    padding: '20px 0 10px'
  };
});

export const LinkInfo = styled(Link)(({ theme }) => {
  return {
    color: theme.palette.secondary.contrastText,
    paddingBottom: 16,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main
    }
  };
});
export const ContactsSocialBox = styled(MUIBox)({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  marginBottom: 24
});
export const TextBox = styled(MUIBox)({});
