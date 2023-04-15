import { inputBaseClasses, inputLabelClasses, outlinedInputClasses, styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  .${inputBaseClasses.input} {
    padding: 13px;
    font-size: 16px;
  }

  .${inputLabelClasses.root} {
    color: #989898;
    padding: 0 10px;
  }
  .${outlinedInputClasses.notchedOutline} {
    border: 1px solid black !important;
    border-radius: 0;
  }
`;
