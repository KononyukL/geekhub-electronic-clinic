import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from '../styled';
import { Box } from '@mui/material';
import ContainerForm from '../ContainerForm';
import Password from './PasswordInput';
import { useAppDispatch } from 'store/hooks';
import { IEditPasswordFormData } from 'api/profile/types';
import { editPassword } from 'store/profile';
import { getAuthData } from 'config/helpers';
import EditProfileError from 'components/FormsProfile/EditProfileError';

interface IPasswordForm {
  closeEdit: () => void;
}

const PasswordForm: FC<IPasswordForm> = ({ closeEdit }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting, isDirty }
  } = useForm<IEditPasswordFormData>({
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
              required: "Це поле є обов'язковим",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                message: `Пароль має містити латинскі літери A-Z та цифри 0-9`
              }
            }}
          />
          <EditProfileError error={errors.old_password} />
        </Box>
        <Box>
          <Password
            register={register}
            errors={errors}
            name="password"
            placeholder="Новий пароль"
            registerOptions={{
              required: "Це поле є обов'язковим",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                message: `Пароль має містити латинскі літери A-Z та цифри 0-9`
              }
            }}
          />
          <EditProfileError error={errors.password} />
        </Box>
        <Box>
          <Password
            register={register}
            errors={errors}
            name="password2"
            placeholder="Підтвердження паролю"
            registerOptions={{
              required: "Це поле є обов'язковим",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                message: `Пароль має містити латинскі літери A-Z та цифри 0-9`
              },
              validate: (value) =>
                value === getValues().password || 'Підтвердження паролю не співпадає'
            }}
          />
          <EditProfileError error={errors.password2} />
        </Box>
      </ContainerForm>

      <Button
        variant="contained"
        color="secondary"
        children="Зберегти"
        type="submit"
        disabled={isSubmitting || !isDirty}
      />
    </Form>
  );
};

export default PasswordForm;
