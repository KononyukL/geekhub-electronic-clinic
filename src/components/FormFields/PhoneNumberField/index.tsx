import React, { FC } from 'react';
import { StyledInput } from '../styled';
import { IInputFormField } from '../interfaces';

const PhoneNumberField: FC<IInputFormField> = ({ register, errors }) => {
  return (
    <StyledInput
      style={errors.phoneNumber && { border: '1px solid red' }}
      name="phoneNumber"
      register={register}
      registerOptions={{
        required: "Це поле є обов'язковим",
        pattern: {
          value: /^\+380\d{9}$/,
          message: 'Введіть дійсний номер телефону у форматі: +380XXXXXXXXX'
        }
      }}
    />
  );
};

export default PhoneNumberField;
