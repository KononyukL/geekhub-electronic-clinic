import React, { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { StyledInput } from '../styled';
import { useTranslation } from 'react-i18next';

interface IEmailField extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const EmailField: FC<IEmailField> = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <StyledInput
      style={errors.email && { border: '1px solid red' }}
      placeholder={t('registration.email')}
      name="email"
      register={register}
      registerOptions={{
        required: `${t('validationErrors.required')}`,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: `${t('validationErrors.email')}`
        }
      }}
    />
  );
};

export default EmailField;
