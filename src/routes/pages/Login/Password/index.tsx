import React, { FC, useState } from 'react';
import { Error, ImgSwitcher, StyledInput, WrapperImg } from 'components/FormFields/styled';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import IMGClosePassword from 'assets/icons/closePassword.svg';
import IMGOpenPassword from 'assets/icons/openPassword.svg';

interface IPhoneNumberField extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: any;
  currenLogin: any;
}

const Password: FC<IPhoneNumberField> = ({ register, errors, currenLogin }) => {
  const [iconPassword, setIconPassword] = useState(false);

  const handleSwitchIconPassword = () => setIconPassword(!iconPassword);

  return (
    <>
      <StyledInput
        style={errors.password && { border: '1px solid red' }}
        type={iconPassword ? 'text' : 'password'}
        placeholder="Пароль*"
        name="password"
        register={register}
        registerOptions={{
          required: true,
          minLength: 6
        }}
      />
      <WrapperImg>
        <ImgSwitcher
          onClick={handleSwitchIconPassword}
          src={iconPassword ? IMGOpenPassword : IMGClosePassword}
          alt="Button Switcher"
        />
      </WrapperImg>
      <Error>{currenLogin ? '' : 'Електронна пошта або пароль невірні'}</Error>
    </>
  );
};
export default Password;
