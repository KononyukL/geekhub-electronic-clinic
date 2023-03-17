import React from 'react';
import { Label, StyledInput } from './styled';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IInput extends React.InputHTMLAttributes<any> {
  label?: string;
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<IInput> = ({ label, name = '', register, ...rest }) => {
  return (
    <Label>
      {label}
      <StyledInput {...rest} {...register(name)} />
    </Label>
  );
};
export default Input;
