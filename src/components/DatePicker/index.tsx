import { Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledDatePicker } from './styled';

interface IDatePicker {
  control: any;
}
const DatePicker: FC<IDatePicker> = ({ control }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Controller
        name="birthday"
        control={control}
        defaultValue={null}
        render={({ field }) => {
          return (
            <StyledDatePicker
              sx={{}}
              label={t('userProfile.profile.data.birthday')}
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
