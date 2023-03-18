import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm, StyledLabel, StyledInput, StyledButton, P } from './styled';
import Input from '../../components/Input';

interface IFormInput {
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

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="lastName"
        register={register}
        // registerOptions={{ required: true, minLength: 3, maxLength: 255 }}
      />
      {errors.firstName && <P>This field is required</P>}

      {/*<StyledLabel>Last Name</StyledLabel>*/}
      {/*<StyledInput {...register('lastName', { required: true, minLength: 3, maxLength: 255 })} />*/}
      {/*{errors.lastName && <p>This field is required</p>}*/}

      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
};

export default RegistrationForm;
