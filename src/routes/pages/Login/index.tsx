import React from 'react';
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
import { useForm } from 'react-hook-form';
import IMGLogo from 'assets/icons/logo.svg';
import EmailField from 'components/FormFields/EmailField';
import PasswordField from 'components/FormFields/PasswordField';
import ErrorValidation from 'components/ErrorValidation';
import { ButtonSubmit } from 'components/FormFields/styled';
import OtherInfo from './OtherInfo';
import { Checkbox } from '@mui/material';
import {useTranslation} from "react-i18next";

interface IFormLoginInput {
  email: string;
  password: string;
}

const Login = () => {
  const {t} = useTranslation()
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

  const onSubmit = async (data: IFormLoginInput) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <Container>
      <Wrapper>
        <WrapperForm>
          <Title>
            <Logo src={IMGLogo} alt="Logo" title="Logo" />
            {t('login.login')}
          </Title>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <EmailField register={register} errors={errors} />
              <ErrorValidation errors={errors.email} />
            </InputWrapper>
            <InputWrapper>
              <PasswordField register={register} errors={errors} />
              <ErrorValidation errors={errors.password} />
            </InputWrapper>
            <WrapperCheckbox>
              <Checkbox color="secondary" />
              <Text>{t('login.rememberMe')}</Text>
            </WrapperCheckbox>
            <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
              {t('buttons.sigIn')}
            </ButtonSubmit>
          </StyledForm>
          <OtherInfo />
        </WrapperForm>
      </Wrapper>
    </Container>
  );
};

export default Login;
