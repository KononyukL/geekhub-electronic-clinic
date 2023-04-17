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
import { StyledInput } from 'components/FormFields/styled';
import IMGLogo from 'assets/icons/logo.svg';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@mui/material';
import FooterForm from './FooterForm';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { selectAuth } from 'store/auth';
import { login } from 'store/auth/thunks';

interface IFormLoginInput {
  email: string;
  password: string;
}

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

  const onSubmit = async (data: IFormLoginInput) => {
    dispatch(login({ email: data.email, password: data.password }));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(currenLogin);
    reset();
  };

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
              <StyledInput
                style={errors.email && { border: '1px solid red' }}
                placeholder="Електронна адреса"
                name="email"
                register={register}
                registerOptions={{
                  required: true
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <StyledInput
                style={errors.password && { border: '1px solid red' }}
                placeholder="Пароль"
                name="password"
                register={register}
                registerOptions={{
                  required: true,
                  minLength: 6
                }}
              />
              {/*  Якщо повернеться не 202, то вивести помилку, що мило або пароль невірні */}
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