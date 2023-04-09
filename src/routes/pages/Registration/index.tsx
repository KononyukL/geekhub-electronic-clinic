import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Wrapper,
  StyledForm,
  InputWrapper,
  WrapperForm,
  ButtonSubmit,
  Logo,
  Title
} from './styled';
import IMGLogo from '../../../assets/icons/logo.svg';
import { useTranslation } from 'react-i18next';
import FooterForm from './FooterForm';
import NameField from './NameField';
import PhoneNumberField from './PhoneNumberField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import ConfirmPasswordField from './ConfirmPasswordField';
import ErrorValidation from '../../../components/ErrorValidation';

interface IFormRegistrationInput {
  firstName: string;
  phoneNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration: FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      phoneNumber: '+38',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (data: IFormRegistrationInput) => {
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
            {t('registration.registration')}
          </Title>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <NameField register={register} errors={errors} />
              <ErrorValidation errors={errors.firstName} />
            </InputWrapper>
            <InputWrapper>
              <PhoneNumberField register={register} errors={errors} />
              <ErrorValidation errors={errors.phoneNumber} />
            </InputWrapper>
            <InputWrapper>
              <EmailField register={register} errors={errors} />
              <ErrorValidation errors={errors.email} />
            </InputWrapper>
            <InputWrapper>
              <PasswordField register={register} errors={errors} />
              <ErrorValidation errors={errors.password} />
            </InputWrapper>
            <InputWrapper>
              <ConfirmPasswordField register={register} errors={errors} />
              <ErrorValidation errors={errors.confirmPassword} />
            </InputWrapper>
            <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
              {t('buttons.createProfile')}
            </ButtonSubmit>
            <FooterForm />
          </StyledForm>
        </WrapperForm>
      </Wrapper>
    </Container>
  );
};

export default Registration;
