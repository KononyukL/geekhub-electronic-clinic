import React, { FC } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { IInputFormField } from '../interfaces';
import { StyledInput } from '../styled';

const NameField: FC<IInputFormField> = ({ register, errors }) => {
  return (
    <StyledInput
      style={errors.firstName && { border: '1px solid red' }}
      placeholder="Ім'я"
      name="firstName"
      register={register}
      registerOptions={
        {
          required: "Це поле є обов'язковим",
          pattern: {
            value: /^[A-ZА-ЯҐЄІЇ][a-zA-ZА-Яа-яҐєії]*$/,
            message: 'Перша буква має бути великою. Цифри та спеціальні символи не допускаються'
          },
          minLength: {
            value: 3,
            message: 'Мінімальна кількість символів - 3'
          },
          maxLength: {
            value: 255,
            message: 'Максимальна кількість символів - 255'
          }
        } as RegisterOptions
      }
    />
  );
};

export default NameField;
