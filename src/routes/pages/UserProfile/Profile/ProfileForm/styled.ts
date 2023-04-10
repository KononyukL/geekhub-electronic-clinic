import { DatePicker } from '@mui/x-date-pickers';
import {
  Box,
  inputBaseClasses,
  outlinedInputClasses,
  Select,
  styled,
  Typography
} from '@mui/material';

export const Container = styled(Box)(({ theme }) => {
  return {
    padding: 24,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      '-5px -5px 100px rgba(193, 193, 193, 0.1), -58px 248px 102px rgba(204, 204, 204, 0.01), -33px 139px 86px rgba(204, 204, 204, 0.05), -14px 62px 64px rgba(204, 204, 204, 0.09), -4px 15px 35px rgba(204, 204, 204, 0.1), 0px 0px 0px rgba(204, 204, 204, 0.1)'
  };
});
export const Form = styled('form')(() => {
  return {};
});

export const ContainerData = styled(Box)(() => {
  return {
    marginBottom: 50
  };
});

export const Title = styled(Typography)(() => {
  return {
    fontWeight: 500,
    fontSize: 20
  };
});

export const ErrorText = styled(Typography)(() => {
  return {};
});

export const HouseNumber = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '20px'
  };
});
export const StyledDataPicker = styled(DatePicker)`
  .${inputBaseClasses.input} {
    padding: 6px !important;
  }
  .${outlinedInputClasses.root} {
    border: 1px solid black;
    outline: none;
  }

  .${outlinedInputClasses.notchedOutline} {
    border: 0;
  }
`;

export const StyledSelect = styled(Select)`
  height: 36px;

  .${inputBaseClasses.root} {
    border: 1px solid black;
    outline: none;
  }

  .${outlinedInputClasses.notchedOutline} {
    border: 1px solid black;
    outline: none;
  }
`;
