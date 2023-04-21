import { Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { StyledDatePicker } from './styled';

interface IDatePicker {
  control: any;
}
const DatePicker: FC<IDatePicker> = ({ control }) => {
  return (
    <Box>
      <Controller
        name="birth_date"
        control={control}
        defaultValue={null}
        render={({ field }) => {
          return (
            <StyledDatePicker
              label="Дата народження "
              value={field.value ? dayjs(field.value, 'DD.MM.YYYY') : undefined}
              onChange={(date) => {
                field.onChange(dayjs(date as dayjs.ConfigType).format('DD.MM.YYYY'));
              }}
              format="DD.MM.YYYY"
            />
          );
        }}
      />
    </Box>
  );
};

export default DatePicker;
