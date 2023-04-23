import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from '../styled';
import { Box } from '@mui/material';
import ErrorValidation from '../../ErrorValidation';
import ContainerForm from '../ContainerForm';
import Password from '../../view/profile/Password';
import { useAppDispatch } from 'store/hooks';
import { IEditPasswordFormData } from 'api/profile/types';
import { editPassword } from 'store/profile';
import { getAuthData } from 'config/helpers';

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
  const { user_id } = getAuthData();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: IEditPasswordFormData) => {
    if (user_id) {
      dispatch(editPassword({ formData: data, id: user_id }));
      closeEdit();
      reset();
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContainerForm>
        <Box>
          <Password
            register={register}
            errors={errors}
            name="old_password"
            placeholder="Поточний пароль"
            registerOptions={{
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
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
            name="password"
            placeholder="Новий пароль"
            registerOptions={{
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
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
            name="password2"
            placeholder="Підтвердження паролю"
            registerOptions={{
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                message: `Пароль має містити латинскі літери A-Z та цифри 0-9`
              },
              validate: (value) =>
                value === getValues().password || 'Підтвердження паролю не співпадає'
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
