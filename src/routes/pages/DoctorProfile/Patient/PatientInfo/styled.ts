import { Box as MUIBox, styled, Typography, Button as MUIButton } from '@mui/material';

export const Container = styled(MUIBox)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '50px',
    width: '100%'
  };
});

export const StyledPatientInfo = styled(MUIBox)(() => {
  return {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flex: '1 1 50%'
  };
});
export const ContainerInfo = styled(MUIBox)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1 1 35%'
  };
});
export const Info = styled(Typography)(() => {
  return {};
});
export const ReceptionInfo = styled(MUIBox)(() => {
  return {
    display: 'flex',
    columnGap: '16px',
    flex: '1 1 50%'
  };
});
export const Reception = styled(MUIBox)(() => {
  return {
    display: 'flex',
    gap: '8px'
  };
});
export const Button = styled(MUIButton)(({ theme }) => {
  return {
    flex: '0 1 200px',
    padding: '14px 0',
    borderRadius: 0,
    boxShadow: 'none',
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    fontWeight: 600
  };
});
