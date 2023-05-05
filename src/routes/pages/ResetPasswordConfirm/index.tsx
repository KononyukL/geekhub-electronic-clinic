import React from 'react';
import { Container, Wrapper, Title, Img } from './styled';
import IMGLogo from 'assets/icons/logo.svg';
import { useForm } from 'react-hook-form';
import PasswordField from 'components/FormFields/PasswordField';
import ErrorValidation from 'components/ErrorValidation';
import { ButtonSubmit, InputWrapper, StyledForm } from 'components/FormFields/styled';
import { useAppDispatch } from 'store/hooks';
import { useParams } from 'react-router-dom';
import { resetPasswordConfirm } from 'store/auth';

type FormData = {
  password: string;
};

const ResetPasswordConfirm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      password: ''
    }
  });
  const dispatch = useAppDispatch();
  const { userId, userToken } = useParams();

  const onSubmit = (data: FormData) => {
    dispatch(resetPasswordConfirm({ uid: userId, token: userToken, new_password: data.password }));
    reset();
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          <Img style={{ marginRight: '16px' }} src={IMGLogo} alt="Logo" title="Logo" />
          Відновлення паролю
        </Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <PasswordField register={register} errors={errors} />
            <ErrorValidation errors={errors.password} />
          </InputWrapper>
          <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
            Змінити пароль
          </ButtonSubmit>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default ResetPasswordConfirm;
