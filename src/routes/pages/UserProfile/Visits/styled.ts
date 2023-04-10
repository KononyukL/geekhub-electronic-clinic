import { Box as MUIBox, styled, Tab, Tabs, Typography, Select as MUISelect } from '@mui/material';
import { theme } from '../../../../theme';

export const Container = styled(MUIBox)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 70%'
  };
});

export const StyledTabs = styled(Tabs)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '1 0 35%'
  };
});

export const StyledTab = styled(Tab)(({ theme }) => {
  return {
    textTransform: 'none',
    color: theme.palette.text.primary,
    fontWeight: 600,
    minWidth: '160px'
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
    marginBottom: '24px',
    padding: '24px',
    columnGap: '50px'
  };
});
export const Select = styled(MUISelect)(() => {
  return {
    flex: '0 0 200px'
  };
});
