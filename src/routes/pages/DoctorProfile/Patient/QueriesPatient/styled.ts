import { Box as MUIBox, styled, Typography, Button as MUIButton } from '@mui/material';

export const Container = styled(MUIBox)(() => {
  return {};
});
export const BoxInfo = styled(MUIBox)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '50px'
  };
});

export const Info = styled(Typography)(() => {
  return {};
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
