import React from 'react';
import { StyledFormLogin } from './styled';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import { ErrorText } from './styled';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';

interface IFormLoginInput {
  login: string;
  password: string;
}

const Login = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      login: '',
      password: ''
    }
  });

  const onSubmit = async (data: IFormLoginInput) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        name="email"
        register={register}
        registerOptions={{
          required: `${t('validationErrors.required')}`,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: `${t('validationErrors.email')}`
          }
        }}
      />
      {errors.email?.message && <ErrorText>{errors.email.message}</ErrorText>}
      <Input
        label="Password"
        name="password"
        register={register}
        registerOptions={{
          required: `${t('validationErrors.required')}`,
          pattern: {
            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,255}$/,
            message: `${t('validationErrors.password')}`
          }
        }}
      />
      {errors.password?.message && <ErrorText>{errors.password.message}</ErrorText>}
      <Button children="Register" type="submit" disabled={!isValid || isSubmitting} />
    </StyledFormLogin>
  );
};

export default Login;
