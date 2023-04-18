import { Box as MUIBox, styled, Tab, Tabs } from '@mui/material';
import { theme } from 'theme';

export const StyledBox = styled(MUIBox)(() => {
  return {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // padding: '24px',
    columnGap: '50px'
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
