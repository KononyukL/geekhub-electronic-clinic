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
import IMGLogo from 'assets/icons/logo.svg';
import ErrorValidation from 'components/ErrorValidation';
import FooterForm from './FooterForm';
import EmailField from 'components/FormFields/EmailField';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

interface IResetPassword {
  email: string;
}

const ResetPassword: FC = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | undefined>(undefined);
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

  const onSubmit = async (data: IResetPassword) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
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
            {t('resetPassword.resetPassword')}
          </Title>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <EmailField register={register} errors={errors} />
              <ErrorValidation errors={errors.email} />
            </InputWrapper>
            <ButtonSubmit type="submit" disabled={isDisabled || !isValid || isSubmitting}>
              {isDisabled ? `${t('resetPassword.repeat')} ${counter}` : t('resetPassword.send')}
            </ButtonSubmit>
            <FooterForm />
          </StyledForm>
        </WrapperForm>
      </Wrapper>
    </Container>
  );
};

export default ResetPassword;
