import React, { FC, useState } from 'react';
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { ImgSwitcher, WrapperImg } from './styled';
import IMGOpenPassword from 'assets/icons/openPassword.svg';
import IMGClosePassword from 'assets/icons/closePassword.svg';
import { InputProfile } from 'components/FormsProfile/styled';

interface IPassword extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  placeholder: string;
  name: string;
  registerOptions?: RegisterOptions;
}

const PasswordInput: FC<IPassword> = ({ errors, placeholder, name, ...rest }) => {
  const [show, setShow] = useState(false);
  const toggleIcon = () => setShow(!show);

  return (
    <>
      <InputProfile
        isError={!!errors[name]}
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

export default PasswordInput;
