import React, { FC, useState, useEffect } from 'react';
import {
  Container,
  Wrapper,
  WrapperForm,
  StyledForm,
  InputWrapper,
  Logo,
  Title,
  WrapperCheckbox,
  Text
} from 'components/FormFields/styled';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { ButtonSubmit } from 'components/FormFields/styled';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { getAuthData } from 'config/helpers';
import IMGLogo from 'assets/icons/logo.svg';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from 'store/auth/thunks';
import { Checkbox } from '@mui/material';
import { selectAuth } from 'store/auth';
import FooterForm from './FooterForm';
import ROUTES from '../../constants';
import Password from './Password';
import { RootState } from 'store';
import Email from './Email';

interface IFormLoginInput {
  email: string;
  password: string;
}

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      email: localStorage.getItem('rememberEmail') || null,
      password: localStorage.getItem('rememberPassword') || null
    }
  });
  const [rememberUser, setRememberUser] = useState<boolean>(false);

  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useAppDispatch();
  const { login: currenLogin } = useAppSelector(selectAuth);

  useEffect(() => {
    const rememberEmail = localStorage.getItem('rememberEmail');
    const rememberPassword = localStorage.getItem('rememberPassword');

    if (rememberEmail && rememberPassword) {
      setRememberUser(true);
    }
  }, [register]);

  const onSubmit = async (data: IFormLoginInput, rememberUser: boolean) => {
    dispatch(login({ email: data.email, password: data.password }));

    if (rememberUser) {
      localStorage.setItem('rememberEmail', data.email);
      localStorage.setItem('rememberPassword', data.password);
    } else {
      localStorage.removeItem('rememberEmail');
      localStorage.removeItem('rememberPassword');
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberUser(event.target.checked);
  };

  const { token } = getAuthData();

  if (token) {
    return <Navigate to={ROUTES.HOME.PATH} />;
  }

  return (
    <Container>
      <Wrapper>
        <WrapperForm>
          <Title>
            <Logo src={IMGLogo} alt="Logo" title="Logo" />
            Вхід
          </Title>
          <StyledForm onSubmit={handleSubmit((data) => onSubmit(data, rememberUser))}>
            <InputWrapper>
              <Email register={register} errors={errors} />
            </InputWrapper>
            <InputWrapper>
              <Password register={register} errors={errors} currenLogin={currenLogin} />
            </InputWrapper>
            <WrapperCheckbox>
              <Checkbox color="secondary" checked={rememberUser} onChange={handleCheckboxChange} />
              <Text>Запам'ятати мене</Text>
            </WrapperCheckbox>
            <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
              Увійти
            </ButtonSubmit>
          </StyledForm>
          <FooterForm />
        </WrapperForm>
      </Wrapper>
    </Container>
  );
};

export default Login;
