import React, { FC, useState } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { ImgSwitcher, InputProfile, WrapperImg } from './styled';
import IMGOpenPassword from 'assets/icons/openPassword.svg';
import IMGClosePassword from 'assets/icons/closePassword.svg';

interface IPassword extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder: string;
  name: string;
  registerOptions?: RegisterOptions;
}

const Password: FC<IPassword> = ({ errors, placeholder, name, ...rest }) => {
  const [show, setShow] = useState(false);
  const toggleIcon = () => setShow(!show);

  return (
    <>
      <InputProfile
        style={errors[name] && { border: '1px solid red' }}
        placeholder={placeholder}
        name={name}
        type={show ? 'text' : 'password'}
        {...rest}
      />
      <WrapperImg>
        <ImgSwitcher
          onClick={toggleIcon}
          src={show ? IMGOpenPassword : IMGClosePassword}
          alt="Button Switcher"
        />
      </WrapperImg>
    </>
  );
};

export default Password;
