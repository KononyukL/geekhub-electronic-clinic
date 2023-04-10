import React, { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { StyledInput } from '../styled';
import { useTranslation } from 'react-i18next';

interface IPhoneNumberField extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const PhoneNumberField: FC<IPhoneNumberField> = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <StyledInput
      style={errors.phoneNumber && { border: '1px solid red' }}
      name="phoneNumber"
      register={register}
      registerOptions={{
        required: `${t('validationErrors.required')}`,
        pattern: {
          value: /^\+380\d{9}$/,
          message: `${t('validationErrors.phoneNumber')}`
        }
      }}
    />
  );
};

export default PhoneNumberField;
