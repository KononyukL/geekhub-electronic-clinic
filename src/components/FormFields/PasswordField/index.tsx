import React, { FC, useState } from 'react';
import { ImgSwitcher, WrapperImg, StyledInput } from '../styled';
import IMGClosePassword from 'assets/icons/closePassword.svg';
import IMGOpenPassword from 'assets/icons/openPassword.svg';
import { IInputFormField } from '../interfaces';

const PasswordField: FC<IInputFormField> = ({ register, errors }) => {
  const [iconPassword, setIconPassword] = useState(false);
  const handleSwitchIconPassword = () => setIconPassword(!iconPassword);

  return (
    <>
      <StyledInput
        style={errors.password && { border: '1px solid red' }}
        placeholder="Пароль"
        name="password"
        type={iconPassword ? 'text' : 'password'}
        register={register}
        registerOptions={{
          required: "Це поле є обов'язковим",
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
            message: "Пароль обов'язково має містити латинскі літери A-Z, a-z та цифри 0-9"
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

export default PasswordField;
