import React, { FC, useState } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ImgSwitcher, WrapperImg ,StyledInput } from '../styled';
import { useTranslation } from 'react-i18next';
import IMGOpenPassword from 'assets/icons/openPassword.svg';
import IMGClosePassword from 'assets/icons/closePassword.svg';

interface IEmailField extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const EmailField: FC<IEmailField> = ({ register, errors }) => {
  const { t } = useTranslation();
  const [iconPassword, setIconPassword] = useState(true);
  const handleSwitchIconPassword = () => setIconPassword(!iconPassword);

  return (
    <>
      <StyledInput
        style={errors.password && { border: '1px solid red' }}
        placeholder={t('registration.password')}
        name="password"
        type={iconPassword ? 'text' : 'password'}
        register={register}
        registerOptions={{
          required: `${t('validationErrors.required')}`,
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: `${t('validationErrors.password')}`
          }
        }}
      />
      <WrapperImg>
        <ImgSwitcher
          onClick={handleSwitchIconPassword}
          src={iconPassword ? IMGOpenPassword : IMGClosePassword}
          alt="Button Switcher"
        />
      </WrapperImg>
    </>
  );
};

export default EmailField;
