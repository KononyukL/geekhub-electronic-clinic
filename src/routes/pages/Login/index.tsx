import React from 'react';
import { Container, Wrapper, WrapperForm, StyledForm, InputWrapper, Logo, Title, OtherInfo } from './styled';
import { useForm } from 'react-hook-form';
import IMGLogo from '../../../assets/icons/logo.svg';
import EmailField from '../Registration/EmailField';
import PasswordField from '../Registration/PasswordField';
import ErrorValidation from '../../../components/ErrorValidation';
import { ButtonSubmit } from '../Registration/styled';

interface IFormLoginInput {
  email: string;
  password: string;
}

const Login = () => {
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
            Вхід
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
            <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
              Увійти
            </ButtonSubmit>
          </StyledForm>
          <OtherInfo>

          </OtherInfo>
        </WrapperForm>
      </Wrapper>
    </Container>
  );
};

export default Login;
