import styled from 'styled-components';
import { DatePicker } from '@mui/x-date-pickers';
import { inputBaseClasses, outlinedInputClasses, Select } from '@mui/material';

export const Container = styled.div`
  background: #ffffff;
  padding: 24px;
`;
export const Form = styled.form``;

export const ContainerData = styled.div`
  margin-bottom: 50px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
`;

export const ErrorText = styled.p``;

export const HouseNumber = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledDataPicker = styled(DatePicker)`
  .${inputBaseClasses.input} {
    padding: 6px !important;
  }
  .${outlinedInputClasses.root} {
    border: 1px solid black;
    outline: none;
    border-radius: 12px;
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
    border-radius: 12px;
  }
`;
