import { Box as MUIBox, styled, Button as MUIButton } from '@mui/material';
import { theme } from '../../../../../theme';

export const Box = styled(MUIBox)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    background: theme.palette.background.paper,
    padding: ' 0 24px'
  };
});

export const BoxInfo = styled(MUIBox)(() => {
  return {
    display: 'flex',
    flex: '1 1 100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.background.default}`,
    padding: '24px 0'
  };
});

export const Button = styled(MUIButton)(({ theme }) => {
  return {
    flex: '0 0 200px',
    height: '50px',
    color: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
    fontWeight: 600,
    borderRadius: 0,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      borderColor: theme.palette.text.primary
    }
  };
});
