import React, { FC, useState } from 'react';
import { ImgSwitcher, StyledInput, WrapperImg } from '../styled';
import IMGClosePassword from 'assets/icons/closePassword.svg';
import IMGOpenPassword from 'assets/icons/openPassword.svg';
import { IInputFormField } from '../interfaces';

const ConfirmPasswordField: FC<IInputFormField> = ({ register, errors, getValues }) => {
  const [iconConfirmPassword, setConfirmPassword] = useState(false);

  const handleSwitchIconConfirmPassword = () => setConfirmPassword(!iconConfirmPassword);

  return (
    <>
      <StyledInput
        style={errors.confirmPassword && { border: '1px solid red' }}
        placeholder="Пароль*"
        type={iconConfirmPassword ? 'text' : 'password'}
        name="confirmPassword"
        register={register}
        registerOptions={{
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
            message: 'Неправильний формат паролю'
          },
          validate: (value) => value === getValues().password || 'Паролі не співпадають'
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
