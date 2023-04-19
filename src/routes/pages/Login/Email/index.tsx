import React, { FC } from 'react';
import { InputWrapper, StyledInput } from 'components/FormFields/styled';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IPhoneNumberField extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const Email: FC<IPhoneNumberField> = ({ register, errors }) => {
  return (
    <>
      <InputWrapper>
        <StyledInput
          style={errors.email && { border: '1px solid red' }}
          type="email"
          placeholder="Електронна адреса"
          name="email"
          register={register}
          registerOptions={{
            required: true
          }}
        />
      </InputWrapper>
    </>
  );
};
export default Email;
