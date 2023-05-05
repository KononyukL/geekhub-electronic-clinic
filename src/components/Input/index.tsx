import React from 'react';
import { StyledInput } from './styled';
import { FieldValues, UseFormRegister, RegisterOptions } from 'react-hook-form';

interface IInput extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions;
}

const Input: React.FC<IInput> = ({ name = '', register, registerOptions, ...rest }) => {
  return <StyledInput {...rest} {...register(name, { ...registerOptions })} />;
};
export default Input;
