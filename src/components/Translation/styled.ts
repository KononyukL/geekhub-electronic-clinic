import { styled, ButtonGroup as MUIButtonGroup, Button as MUIButton } from '@mui/material';

export const ButtonGroup = styled(MUIButtonGroup)(({ theme }) => {
  return {
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.contrastText,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
    boxShadow: 'none',
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
      borderColor: theme.palette.secondary.main
    }
  };
});

export const Button = styled(MUIButton)(() => {
  return {
    borderRadius: 0,
    boxShadow: 'none',
    textTransform: 'none',
    width: 25,
    height: 32
  };
});
