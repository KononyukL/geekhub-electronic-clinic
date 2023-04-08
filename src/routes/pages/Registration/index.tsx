import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Wrapper,
  StyledForm,
  ErrorText,
  StyledInput,
  StyledWrapper,
  WrapperForm,
  ButtonSubmit,
  Logo,
  Title,
  TextLogin,
  TextConfidence,
  Link,
  ImgSwitcher,
  WrapperImg
} from './styled';
import IMGLogo from '../../../assets/icons/logo.svg';
import IMGOpenPassword from '../../../assets/icons/openPassword.svg';
import IMGClosePassword from '../../../assets/icons/closePassword.svg';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

interface IFormRegistrationInput {
  firstName: string;
  telephone: number;
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
      telephone: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  const [iconPassword, setIconPassword] = useState(true);
  const [iconConfirmPassword, setConfirmPassword] = useState(true);

  const handleSwitchIconPassword = () => setIconPassword(!iconPassword);
  const handleSwitchIconConfirmPassword = () => setConfirmPassword(!iconConfirmPassword);

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
            <StyledWrapper>
              <StyledInput
                style={errors.firstName && { border: '1px solid red' }}
                label={t('registration.name')}
                name="firstName"
                register={register}
                registerOptions={{
                  required: `${t('validationErrors.required')}`,
                  pattern: {
                    value: /^(?=.{3,255}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/,
                    message: `${t('registration.errors.firstName.minAndMaxLength')}`
                  }
                }}
              />
              {errors.firstName?.message && <ErrorText>{errors.firstName?.message}</ErrorText>}
            </StyledWrapper>
            <StyledWrapper>
              <StyledInput
                style={errors.telephone && { border: '1px solid red' }}
                label={t('registration.phoneNumber')}
                name="telephone"
                register={register}
                registerOptions={{ required: true, minLength: 3, maxLength: 255 }}
              />
              {errors.telephone && <ErrorText>This field is required</ErrorText>}
            </StyledWrapper>
            <StyledWrapper>
              <StyledInput
                style={errors.email && { border: '1px solid red' }}
                label={t('registration.email')}
                name="email"
                register={register}
                registerOptions={{
                  required: `${t('validationErrors.email')}`,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: `${t('validationErrors.email')}`
                  }
                }}
              />
              {errors.email?.message && <ErrorText>{errors.email.message}</ErrorText>}
            </StyledWrapper>
            <StyledWrapper>
              <Box>
                <StyledInput
                  style={errors.password && { border: '1px solid red' }}
                  label={t('registration.password')}
                  name="password"
                  type={iconPassword ? 'text' : 'password'}
                  register={register}
                  registerOptions={{
                    required: true,
                    pattern:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,255}$/
                  }}
                />
                <WrapperImg>
                  <ImgSwitcher
                    onClick={handleSwitchIconPassword}
                    src={iconPassword ? IMGOpenPassword : IMGClosePassword}
                    alt="Button Switcher"
                  />
                </WrapperImg>
              </Box>
              {errors.password && <ErrorText>This field is required</ErrorText>}
            </StyledWrapper>
            <StyledWrapper>
              <Box>
                <StyledInput
                  style={errors.confirmPassword && { border: '1px solid red' }}
                  label={t('registration.confirmPassword')}
                  name="confirmPassword"
                  register={register}
                  registerOptions={{
                    required: true
                  }}
                />
                <WrapperImg>
                  <ImgSwitcher
                    onClick={handleSwitchIconConfirmPassword}
                    src={iconConfirmPassword ? IMGOpenPassword : IMGClosePassword}
                    alt="Button Switcher"
                  />
                </WrapperImg>
              </Box>
              {errors.confirmPassword && <ErrorText>This field is required</ErrorText>}
            </StyledWrapper>
            <TextLogin>
              {t('registration.loginText')}
              <Link to="/login"> {t('registration.login')}</Link>
            </TextLogin>
            <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
              {t('buttons.createProfile')}
            </ButtonSubmit>
            <TextConfidence>
              {t('registration.confidenceText')}
              <Link to="/"> {t('registration.rivacyPolicy')}</Link>
            </TextConfidence>
          </StyledForm>
        </WrapperForm>
      </Wrapper>
    </Container>
  );
};

export default Registration;
