import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm, ErrorText } from './styled';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import Button from '../../components/Button';

interface IFormInput {
  firstName: string;
  lastName: string;
  fatherName: string;
  login: string;
  password: string;
  gender: string;
  birthData: string;
}

const genderOptions = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' }
];

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<any>({
    mode: "onBlur",
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

  const onSubmit = async (data: IFormInput) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

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
        max={new Date().toISOString().split('T')[0]}
        label="Birth Data"
        name="birthData"
        register={register}
        registerOptions={{
          required: true
        }}
      />
      {errors.birthData && <ErrorText>This field is required</ErrorText>}
      <Button
        children="Register"
        type="submit"
        disabled={!isValid}
      />
    </StyledForm>
  );
};

export default Registration;
