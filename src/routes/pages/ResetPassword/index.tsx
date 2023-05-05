import React, { FC, useEffect, useState } from 'react';
import {
  ButtonSubmit,
  Container,
  InputWrapper,
  Logo,
  StyledForm,
  Title,
  Wrapper,
  WrapperForm
} from 'components/FormFields/styled';
import EmailField from 'components/FormFields/EmailField';
import ErrorValidation from 'components/ErrorValidation';
import IMGLogo from 'assets/icons/logo.svg';
import { useForm } from 'react-hook-form';
import FooterForm from './FooterForm';
import { IResetPasswordInput } from './interfaces';
import { useAppDispatch } from 'store/hooks';
import { resetPassword } from 'store/auth/thunks';

const ResetPassword: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | undefined>(undefined);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      email: ''
    }
  });

  useEffect(() => {
    if (isDisabled) {
      setTimerInterval(
        setInterval(() => {
          setCounter((prevState) => prevState - 1);
        }, 1000)
      );
    } else {
      clearInterval(timerInterval);
      setCounter(59);
    }

    return () => clearInterval(timerInterval);
  }, [isDisabled]);

  const onSubmit = async (data: IResetPasswordInput) => {
    dispatch(resetPassword({ email: data.email }));
    reset();

    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 59000);
  };

  return (
    <Container>
      <Wrapper>
        <WrapperForm>
          <Title>
            <Logo src={IMGLogo} alt="Logo" title="Logo" />
            Відновлення паролю
          </Title>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <EmailField register={register} errors={errors} />
              <ErrorValidation errors={errors.email} />
            </InputWrapper>
            <ButtonSubmit type="submit" disabled={isDisabled || !isValid || isSubmitting}>
              {isDisabled ? `Повторити через ${counter}` : 'Відправити новий пароль'}
            </ButtonSubmit>
            <FooterForm />
          </StyledForm>
        </WrapperForm>
      </Wrapper>
    </Container>
  );
};

export default ResetPassword;
