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
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { ButtonSubmit } from 'components/FormFields/styled';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { IFormLoginInput } from './interfaces';
import IMGLogo from 'assets/icons/logo.svg';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from 'store/auth/thunks';
import { Checkbox } from '@mui/material';
import { selectAuth } from 'store/auth';
import FooterForm from './FooterForm';
import Password from './Password';
import { RootState } from 'store';
import { TOKEN } from 'config';
import Email from './Email';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
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
  const token = localStorage.getItem(TOKEN);

  const onSubmit = async (data: IFormLoginInput) => {
    dispatch(login({ email: data.email, password: data.password }));
    reset();
  };

  if (token && token.length) {
    return <Navigate to="/" />;
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
