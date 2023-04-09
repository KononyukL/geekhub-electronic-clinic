import React, { FC } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { StyledInput } from '../styled';
import { useTranslation } from 'react-i18next';

interface INameField extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const NameField: FC<INameField> = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <StyledInput
      style={errors.firstName && { border: '1px solid red' }}
      placeholder={t('registration.name')}
      name="firstName"
      register={register}
      registerOptions={
        {
          required: `${t('validationErrors.required')}`,
          pattern: {
            value: /^[A-ZА-ЯҐЄІЇ][a-zA-ZА-Яа-яҐєії]*$/,
            message: `${t('validationErrors.firstName.firstBigLatter')}`
          },
          minLength: {
            value: 3,
            message: `${t('validationErrors.firstName.minLength')}`
          },
          maxLength: {
            value: 255,
            message: `${t('validationErrors.firstName.maxLength')}`
          }
        } as RegisterOptions
      }
    />
  );
};

export default NameField;
