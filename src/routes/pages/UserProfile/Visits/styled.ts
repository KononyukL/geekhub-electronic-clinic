import { Box as MUIBox, styled, Typography, Select as MUISelect } from '@mui/material';
import { theme } from 'theme';

export const Container = styled(MUIBox)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 70%'
  };
});

export const Info = styled(Typography)(() => {
  return {};
});

export const BoxInfo = styled(MUIBox)(() => {
  return {
    display: 'grid',
    gridTemplateColumns: '130px 60px 80px',
    alignItems: 'center',
    flex: '1 0 auto',
    columnGap: '60px'
  };
});

export const Box = styled(MUIBox)(() => {
  return {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    boxShadow:
      '-5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)',
    padding: '24px',
    columnGap: '50px'
  };
});
export const Select = styled(MUISelect)(() => {
  return {
    flex: '0 1 200px'
  };
});

export const VisitsContainer = styled(MUIBox)(({ theme }) => {
  return {
    marginBottom: 50,
    background: theme.palette.background.paper
  };
});
