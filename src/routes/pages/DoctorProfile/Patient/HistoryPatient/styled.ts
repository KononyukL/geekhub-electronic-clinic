import { Box as MUIBox, Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    padding: '0 24px ',
    background: theme.palette.background.paper,
    marginBottom: '50px'
  };
});

export const PatientInfo = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flex: '1 0 50%'
  };
});
export const BoxInfo = styled(Box)(() => {
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
    alignItems: 'center',
    columnGap: '30px',
    flex: '0 1 50%'
  };
});
export const Reception = styled(MUIBox)(() => {
  return {
    display: 'flex',
    gap: '8px'
  };
});
