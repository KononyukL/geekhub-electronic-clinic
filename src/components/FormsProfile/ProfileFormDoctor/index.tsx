import React, { FC } from 'react';
import { Container, Form, InputProfile, Button } from '../styled';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import ContainerForm from '../ContainerForm';
import { Box } from '@mui/material';
import DatePicker from '../../DatePicker';

interface IFormLoginInput {
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  email: string;
  phone: number;
  street: string;
  house: number;
  apartment: number;
}
interface IProfileForm {
  closeEdit: () => void;
}
const ProfileFormUser: FC<IProfileForm> = ({ closeEdit }) => {
  const { t } = useTranslation();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<any>({
    mode: 'onBlur'
  });

  const onSubmit = async (data: IFormLoginInput) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    closeEdit();
    reset();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <ContainerForm title={'Персональні дані'}>
            <Box>
              <InputProfile placeholder="Ваше прізвище " name="lastName" register={register} />
            </Box>
            <Box>
              <InputProfile placeholder="Ваше ім’я " name="firstName" register={register} />
            </Box>
            <Box>
              <InputProfile placeholder="По-батькові" name="middleName" register={register} />
            </Box>
            <DatePicker control={control} />
            <Box>
              <InputProfile placeholder="+380 (___) __-__-___ " name="phone" register={register} />
            </Box>
          </ContainerForm>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          children={t('buttons.save')}
          type="submit"
          disabled={isSubmitting}
        />
      </Form>
    </Container>
  );
};

export default ProfileFormUser;
