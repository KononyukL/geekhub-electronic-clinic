import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './styled';

interface FormInput {
  firsName: string;
  lastName: string;
  fullName: string;
  login: string;
  password: string;
  gender: any; // ??
  birthData: string;
}

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<any>({
    defaultValues: {
      firsName: '',
      lastName: '',
      fullName: '', // ??
      login: '',
      password: '',
      gender: '',
      birthData: ''
    }
  });

  const onSubmit = (data: FormInput) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>Firs Name</StyledLabel>
      {/*<Input ></Input>*/}
      {/*<StyledInput {...register('firsName', { required: true, minLength: 3, maxLength: 255 })} />*/}
      {/*{errors.firstName && <p>This field is required</p>}*/}

      <StyledLabel>Last Name</StyledLabel>
      <StyledInput {...register('lastName', { required: true, minLength: 3, maxLength: 255 })} />
      {errors.lasttName && <p>This field is required</p>}

      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
};

export default RegistrationForm;
