import { Box as MUIBox, Button, styled, Typography } from '@mui/material';

export const Container = styled(MUIBox)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '60px',
    flex: '1 1 70%'
  };
});

export const BoxInfo = styled(MUIBox)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper,
    padding: '24px'
  };
});
export const BoxData = styled(MUIBox)(({ theme }) => {
  return {
    borderTop: `1px solid ${theme.palette.background.default}`,
    padding: '24px 0'
  };
});

export const BoxTitle = styled(MUIBox)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px'
  };
});

export const Title = styled(Typography)(() => {
  return {
    fontSize: '20px',
    fontWeight: 600
  };
});

export const ButtonEdit = styled(Button)(({ theme }) => {
  return {
    fontSize: '14px',
    color: theme.palette.text.secondary,
    textTransform: 'none'
  };
});

export const TitleData = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
    width: '150px'
  };
});
export const Data = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.primary
  };
});

export const BoxSecurity = styled(MUIBox)(() => {
  return {
    display: 'flex',
    gap: '24px'
  };
});
