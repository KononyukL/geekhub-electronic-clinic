import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import {StyledLabel, StyledSelect, StyledSelectWrapper, StyledOption} from './styled';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.InputHTMLAttributes<any> {
  name: string;
  label?: string;
  options: SelectOption[];
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
}

const SelectInput: React.FC<SelectProps> = ({ name, label, options, register, registerOptions }) => {
  return (
    <StyledSelectWrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledSelect {...register(name, { ...registerOptions })}>
        {options.map((option, index) => (
          <StyledOption key={index} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};

export default SelectInput;
