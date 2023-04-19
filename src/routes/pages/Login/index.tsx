import React, { FC } from 'react';
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
import { ButtonSubmit } from 'components/FormFields/styled';
import IMGLogo from 'assets/icons/logo.svg';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@mui/material';
import FooterForm from './FooterForm';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { selectAuth } from 'store/auth';
import { login } from 'store/auth/thunks';
import { Navigate } from 'react-router-dom';
import { getAuthData } from 'config/helpers';
import ROUTES from '../../constants';
import Email from './Email';
import Password from './Password';

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
      email: '',
      password: ''
    }
  });
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useAppDispatch();
  const { login: currenLogin } = useAppSelector(selectAuth);

  const onSubmit = async (data: IFormLoginInput) => {
    dispatch(login({ email: data.email, password: data.password }));
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
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <Email register={register} errors={errors} />
            </InputWrapper>
            <InputWrapper>
              <Password register={register} errors={errors} currenLogin={currenLogin} />
            </InputWrapper>
            <WrapperCheckbox>
              <Checkbox color="secondary" />
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
