import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm, StyledButton, ErrorText } from './styled';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';

interface IFormInput {
  firstName: string;
  lastName: string;
  fatherName: string;
  login: string;
  password: string;
  gender: string;
  birthData: string;
}

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<any>({
    defaultValues: {
      firstName: '',
      lastName: '',
      fatherName: '',
      login: '',
      password: '',
      gender: '',
      birthData: ''
    }
  });

  const genderOptions = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'other', label: 'Other' }
  ];

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="First Name"
        name="firstName"
        register={register}
        registerOptions={{ required: true, minLength: 3, maxLength: 255 }}
      />
      {errors.firstName && <ErrorText>This field is required</ErrorText>}
      <Input
        label="Last Name"
        name="lastName"
        register={register}
        registerOptions={{ required: true, minLength: 3, maxLength: 255 }}
      />
      {errors.lastName && <ErrorText>This field is required</ErrorText>}
      <Input
        label="Father Name"
        name="fatherName"
        register={register}
        registerOptions={{ required: true, minLength: 3, maxLength: 255 }}
      />
      {errors.fatherName && <ErrorText>This field is required</ErrorText>}
      <Input
        label="Login"
        name="login"
        register={register}
        registerOptions={{ required: true, minLength: 3, maxLength: 255 }}
      />
      {errors.login && <ErrorText>This field is required</ErrorText>}
      <Input
        label="Password"
        name="password"
        register={register}
        registerOptions={{
          required: true,
          pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,255}$/
        }}
      />
      {errors.password && <ErrorText>This field is required</ErrorText>}
      <SelectInput
        label="Gender"
        name="gender"
        options={genderOptions}
        register={register}
        registerOptions={{
          required: true
        }}
      />
      {errors.gender && <ErrorText>This field is required</ErrorText>}
      <Input
        type="date"
        max="today"
        label="Birth Data"
        name="birthData"
        register={register}
        registerOptions={{
          required: true
        }}
      />

      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
};

export default RegistrationForm;
