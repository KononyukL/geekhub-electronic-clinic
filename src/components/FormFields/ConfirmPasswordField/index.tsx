import React, { FC, useState } from 'react';
import { ImgSwitcher, StyledInput, WrapperImg } from '../styled';
import IMGOpenPassword from 'assets/icons/openPassword.svg';
import IMGClosePassword from 'assets/icons/closePassword.svg';
import { useTranslation } from 'react-i18next';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IConfirmPasswordField extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const ConfirmPasswordField: FC<IConfirmPasswordField> = ({ register, errors }) => {
  const { t } = useTranslation();
  const [iconConfirmPassword, setConfirmPassword] = useState(true);

  const handleSwitchIconConfirmPassword = () => setConfirmPassword(!iconConfirmPassword);
  return (
    <>
      <StyledInput
        style={errors.confirmPassword && { border: '1px solid red' }}
        placeholder={t('registration.confirmPassword')}
        type={iconConfirmPassword ? 'text' : 'password'}
        name="confirmPassword"
        register={register}
        registerOptions={{
          required: `${t('validationErrors.confirmPassword')}`,
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: `${t('validationErrors.confirmPassword')}`
          }
        }}
      />
      <WrapperImg>
        <ImgSwitcher
          onClick={handleSwitchIconConfirmPassword}
          src={iconConfirmPassword ? IMGOpenPassword : IMGClosePassword}
          alt="Button Switcher"
        />
      </WrapperImg>
    </>
  );
};

export default ConfirmPasswordField;
