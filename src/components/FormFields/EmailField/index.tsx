import React, { FC } from 'react';
import { StyledInput } from '../styled';
import { IInputFormField } from '../interfaces';

const EmailField: FC<IInputFormField> = ({ register, errors }) => {
  return (
    <StyledInput
      style={errors.email && { border: '1px solid red' }}
      placeholder="Електронна адреса*"
      name="email"
      register={register}
      registerOptions={{
        required: "Це поле є обов'язковим",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Невірний формат пошти. Приклад: Standart@gmail.com'
        }
      }}
    />
  );
};

export default EmailField;
