import React, { FC } from 'react';
import {
  Container,
  Wrapper,
  WrapperForm,
  StyledForm,
  InputWrapper,
  Logo,
  Title
} from 'components/FormFields/styled';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { ButtonSubmit } from 'components/FormFields/styled';
import { IFormLoginInput } from './interfaces';
import { getAuthData } from 'config/helpers';
import IMGLogo from 'assets/icons/logo.svg';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from 'store/auth/thunks';
import { selectAuth } from 'store/auth';
import FooterForm from './FooterForm';
import ROUTES from '../../constants';
import Password from './Password';
import Email from './Email';
import { useScrollToTop } from 'hooks/useScrollToTop';

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
  useScrollToTop();
  const dispatch = useAppDispatch();
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
