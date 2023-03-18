import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Label, StyledSelect, SelectWrapper, Option } from './styled';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  name: string;
  label?: string;
  options: SelectOption[];
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
}

const SelectInput: React.FC<SelectProps> = ({ name, label, options, register, registerOptions }) => {
  return (
    <SelectWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledSelect {...register(name, { ...registerOptions })}>
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default SelectInput;
