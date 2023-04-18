import { Box as MUIBox, Button, styled, Typography } from '@mui/material';

export const Container = styled(MUIBox)(({ theme }) => {
  return {
    flex: '1 1 70%',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '50px'
  };
});
export const Box = styled(MUIBox)(() => {
  return {
    display: 'flex',
    padding: '24px 24px 0',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  };
});

export const WrapInfo = styled(MUIBox)(() => {
  return {
    display: 'flex',
    gap: '24px'
  };
});

export const Info = styled(MUIBox)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  };
});
export const Text = styled(Typography)(() => {
  return {};
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
