import React, { FC } from 'react';
import { Container, Form, HouseNumber, InputProfile, StyledSelect, Button } from '../styled';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import ContainerForm from '../ContainerForm';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { city, genderOptions } from 'routes/pages/UserProfile/Profile/mockData';
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
const ProfileForm: FC<IProfileForm> = ({ closeEdit }) => {
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
            <Controller
              name="gender"
              control={control}
              defaultValue="gender"
              render={({ field }) => {
                return (
                  <StyledSelect
                    value={field.value}
                    defaultValue="gender"
                    onChange={(event) => {
                      field.onChange(event);
                    }}>
                    <MenuItem disabled value="gender">
                      Оберіть вашу стать
                    </MenuItem>
                    {genderOptions.map(({ label, value }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                );
              }}
            />
          </ContainerForm>

          <ContainerForm title="Адреса">
            <Box>
              <Controller
                name="city"
                control={control}
                defaultValue="city"
                render={({ field }) => {
                  return (
                    <StyledSelect
                      value={field.value}
                      defaultValue="city"
                      onChange={(event) => {
                        field.onChange(event);
                      }}>
                      <MenuItem disabled value="city">
                        Оберіть ваше місто
                      </MenuItem>
                      {city.map((option, i) => (
                        <MenuItem key={i} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  );
                }}
              />
            </Box>
            <Box>
              <InputProfile placeholder="Вулиця" name="street" register={register} />
            </Box>
            <HouseNumber>
              <Box>
                <InputProfile placeholder="Будинок" name="house" register={register} />
              </Box>
              <Box>
                <InputProfile placeholder="Корпус" name="apartment" register={register} />
              </Box>
            </HouseNumber>
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

export default ProfileForm;
