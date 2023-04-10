import { Box, styled, Typography, Button as MUIButton } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.background.paper,
    padding: '24px',
    marginBottom: '24px',
    columnGap: '50px',
    boxShadow:
      '-5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)'
  };
});
export const DoctorsInfo = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flex: '1 0 35%'
  };
});
export const ContainerInfo = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };
});
export const Info = styled(Typography)(() => {
  return {};
});
export const ReceptionInfo = styled(Box)(() => {
  return {
    display: 'grid',
    gridTemplateColumns: '130px 60px 80px',
    columnGap: '60px',
    flex: '1 1 auto'
  };
});
export const Reception = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  };
});
export const Button = styled(MUIButton)(({ theme }) => {
  return {
    flex: '0 0 200px',
    padding: '14px 0',
    borderRadius: 0,
    boxShadow: 'none',
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary
  };
});
