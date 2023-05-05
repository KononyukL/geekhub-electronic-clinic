import { styled, Box as MUIBox, Typography, Button as MUIButton } from '@mui/material';

export const Box = styled(MUIBox)(({ theme }) => {
  return {
    width: 390,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '32px',
    gap: '16px'
  };
});

export const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center'
  };
});
export const Text = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.text.secondary,
    textAlign: 'center'
  };
});

export const BoxButton = styled(MUIBox)(() => {
  return {
    display: 'flex',
    gap: 20,
    width: '100%'
  };
});

export const Button = styled(MUIButton)(() => {
  return {
    flex: '1 1 50%',
    padding: 12,
    borderRadius: 0
  };
});
