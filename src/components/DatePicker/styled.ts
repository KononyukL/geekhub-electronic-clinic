import { inputBaseClasses, inputLabelClasses, outlinedInputClasses, styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  .${inputBaseClasses.input} {
    font-size: 16px;
    line-height: 20px;
    padding: 13px;
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
