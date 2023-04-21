import {
  Box,
  inputBaseClasses,
  outlinedInputClasses,
  Select,
  styled,
  Button as MUIButton,
  TextField
} from '@mui/material';
import Input from '../Input';

export const Container = styled(Box)(() => {
  return {};
});
export const Form = styled('form')(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.paper
  };
});

export const HouseNumber = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '20px'
  };
});

export const StyledSelect = styled(Select)`
  height: 50px;
  border-radius: 0;
  width: 100%;
  .${inputBaseClasses.root} {
    border: 1px solid black;
    outline: none;
  }
  .${outlinedInputClasses.notchedOutline} {
    border: 1px solid black;
    outline: none;
  }
`;

export const InputProfile = styled(Input)(({ theme }) => {
  return {
    height: '50px',
    paddingLeft: '20px',
    fontSize: '16px',
    color: theme.palette.text.secondary
  };
});

export const Button = styled(MUIButton)(() => {
  return {
    width: '200px',
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: 0,
    padding: '14px 0'
  };
});

export const StyledTextField = styled(TextField)`
  width: 100%;

  .${inputBaseClasses.input} {
    font-size: 16px;
  }

  .${outlinedInputClasses.notchedOutline} {
    border: 1px solid black !important;
    border-radius: 0;
  }

  .${outlinedInputClasses.root} {
    border-radius: 0;
    padding: 6px;
  }
`;
