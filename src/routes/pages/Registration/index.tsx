import React, { FC, useState } from 'react';
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
} from 'components/FormFields/styled';
import ConfirmPasswordField from 'components/FormFields/ConfirmPasswordField';
import PhoneNumberField from 'components/FormFields/PhoneNumberField';
import PasswordField from 'components/FormFields/PasswordField';
import LastNameField from 'components/FormFields/LastNameField';
import EmailField from 'components/FormFields/EmailField';
import ErrorValidation from 'components/ErrorValidation';
import NameField from 'components/FormFields/NameField';
import { useAppDispatch } from 'store/hooks';
import IMGLogo from 'assets/icons/logo.svg';
import { registration } from 'store/auth';
import ModalWindow from './ModalWindow';
import FooterForm from './FooterForm';
import { useScrollToTop } from 'hooks/useScrollToTop';

interface IFormRegistrationInput {
  firstName: string;
  lastName: string;
  phoneNumber: number | string;
  email: string;
  password: string;
}

const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '+38',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useScrollToTop();
  const handleClose = () => setOpen(false);

  const onSubmit = async (data: IFormRegistrationInput) => {
    dispatch(
      registration({
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        phone_num: data.phoneNumber,
        password: data.password
      })
    );

    setOpen(!open);
  };

  return (
    <Container>
      <Wrapper>
        <WrapperForm>
          <Title>
            <Logo src={IMGLogo} alt="Logo" title="Logo" />
            Реєстрація
          </Title>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <NameField register={register} errors={errors} />
              <ErrorValidation errors={errors.firstName} />
            </InputWrapper>
            <InputWrapper>
              <LastNameField register={register} errors={errors} />
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
              <ConfirmPasswordField register={register} errors={errors} getValues={getValues} />
              <ErrorValidation errors={errors.confirmPassword} />
            </InputWrapper>
            <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
              Створити обліковий запис
            </ButtonSubmit>
            <FooterForm />
          </StyledForm>
          <ModalWindow open={open} handleClose={handleClose} />
        </WrapperForm>
      </Wrapper>
    </Container>
  );
};

export default Registration;
