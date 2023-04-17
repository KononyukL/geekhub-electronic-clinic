import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, InputProfile } from '../styled';
import { Box } from '@mui/material';
import ErrorValidation from '../../ErrorValidation';
import ContainerForm from '../ContainerForm';
import Password from '../../view/profile/Password';

interface IPasswordFormData {
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

interface IPasswordForm {
  closeEdit: () => void;
}

const PasswordForm: FC<IPasswordForm> = ({ closeEdit }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur'
  });
  const onSubmit = async (data: IPasswordFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    closeEdit();
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ width: '330px' }}>
        <InputProfile
          style={errors.email && { border: '1px solid red' }}
          placeholder="Електронна пошта"
          name="email"
          register={register}
          registerOptions={{
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Невірний формат пошти. Приклад: Standart@gmail.com '
            }
          }}
        />
        <ErrorValidation errors={errors.email} />
      </Box>
      <ContainerForm>
        <Box>
          <Password
            register={register}
            errors={errors}
            name="password"
            placeholder="Поточний пароль"
            registerOptions={{
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: `Пароль має містити латинскі літери A-Z та цифри 0-9`
              }
            }}
          />
          <ErrorValidation errors={errors.password} />
        </Box>
        <Box>
          <Password
            register={register}
            errors={errors}
            name="newPassword"
            placeholder="Новий пароль"
            registerOptions={{
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: `Пароль має містити латинскі літери A-Z та цифри 0-9`
              }
            }}
          />
          <ErrorValidation errors={errors.newPassword} />
        </Box>
        <Box>
          <Password
            register={register}
            errors={errors}
            name="confirmPassword"
            placeholder="Підтвердження паролю"
            registerOptions={{
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: `Пароль має містити латинскі літери A-Z та цифри 0-9`
              },
              validate: (value) =>
                value === getValues().newPassword || 'Підтвердження паролю не співпадає'
            }}
          />
          <ErrorValidation errors={errors.confirmPassword} />
        </Box>
      </ContainerForm>

      <Button
        variant="contained"
        color="secondary"
        children="Зберегти"
        type="submit"
        disabled={isSubmitting}
      />
    </Form>
  );
};

export default PasswordForm;
