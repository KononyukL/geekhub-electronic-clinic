import { Box, Button, styled, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
    backgroundColor: theme.palette.background.paper,
    padding: 24,
    boxShadow:
      '-5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)'
  };
});

export const WrapInfo = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '24px'
  };
});

export const Info = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };
});
export const Text = styled(Typography)(() => {
  return {};
});

export const WrapButton = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };
});
export const StyledButton = styled(Button)(() => {
  return {
    width: '100px',
    padding: '2px',
    fontWeight: 500,
    fontSize: '16px'
  };
});

export const Label = styled(Typography)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontWeight: 500
  };
});
