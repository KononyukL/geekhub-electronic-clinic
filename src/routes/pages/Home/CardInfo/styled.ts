import { styled, Box as MUIBox, Typography as MUITypography } from '@mui/material';

export const Box = styled(MUIBox)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 456,
    padding: '50px 32px',
    boxShadow: ` -5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)`
  };
});
export const BoxInfo = styled(MUIBox)({
  textAlign: 'center',
  marginTop: '25px'
});

export const Title = styled(MUITypography)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: 20,
    marginBottom: '16px'
  };
});
export const Typography = styled(MUITypography)(({ theme }) => {
  return {
    color: theme.palette.text.secondary
  };
});
