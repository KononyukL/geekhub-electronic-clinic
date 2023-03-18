import React from 'react';
import { Label, StyledInput } from './styled';
import { FieldValues, UseFormRegister, RegisterOptions } from 'react-hook-form';

interface IInput extends React.InputHTMLAttributes<any> {
  label?: string;
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions;
}

const Input: React.FC<IInput> = ({ label, name = '', register, registerOptions, ...rest }) => {
  return (
    <Label>
      {label}
      <StyledInput {...rest} {...register(name, { ...registerOptions })} />
    </Label>
  );
};
export default Input;
