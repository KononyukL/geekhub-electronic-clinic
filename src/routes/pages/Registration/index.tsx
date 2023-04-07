import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  StyledForm,
  ErrorText,
  StyledInput,
  StyledWrapper,
  Wrapper,
  ButtonSubmit
} from './styled';
import { Typography } from '@mui/material';

interface IFormInput {
  firstName: string;
  telephone: number;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration: FC = () => {
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

  const onSubmit = async (data: IFormInput) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <Container>
      <Wrapper>
        <h2>IGM Реєстрація</h2>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledWrapper>
            <StyledInput
              label="First Name"
              name="firstName"
              register={register}
              registerOptions={{ required: true, minLength: 3, maxLength: 255 }}
            />
            {errors.firstName && <ErrorText>This field is required</ErrorText>}
          </StyledWrapper>
          <StyledWrapper>
            <StyledInput
              label="Telephone"
              name="telephone"
              register={register}
              registerOptions={{ required: true, minLength: 3, maxLength: 255 }}
            />
            {errors.telephone && <ErrorText>This field is required</ErrorText>}
          </StyledWrapper>
          <StyledWrapper>
            <StyledInput
              label="Email"
              name="email"
              register={register}
              registerOptions={{
                required: true,
                pattern:
                  /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,255}$/
              }}
            />
            {errors.email && <ErrorText>This field is required</ErrorText>}
          </StyledWrapper>
          <StyledWrapper>
            <StyledInput
              label="Password"
              name="password"
              register={register}
              registerOptions={{
                required: true
              }}
            />
            {errors.password && <ErrorText>This field is required</ErrorText>}
          </StyledWrapper>
          <StyledWrapper>
            <StyledInput
              label="Confirm Password"
              name="conformPassword"
              register={register}
              registerOptions={{
                required: true
              }}
            />
            {errors.conformPassword && <ErrorText>This field is required</ErrorText>}
          </StyledWrapper>
          <Typography>Ви вже маєте обліковий запис? Увійти</Typography>
          <ButtonSubmit type="submit" disabled={!isValid || isSubmitting}>
            Створити обліковий запис
          </ButtonSubmit>
          <Typography>
            Створюючи обліковий запис я погоджуюсь з Політикою конфіденційності
          </Typography>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default Registration;
