import React, { FC } from 'react';
import {
  Container,
  Form,
  HouseNumber,
  InputProfile,
  StyledSelect,
  Button,
  StyledTextField
} from '../styled';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import ContainerForm from '../ContainerForm';
import MenuItem from '@mui/material/MenuItem';
import { Autocomplete, Box, createFilterOptions } from '@mui/material';
import { genderOptions, oblastCenters } from 'routes/pages/UserProfile/Profile/mockData';
import DatePicker from '../../DatePicker';
import ErrorValidation from 'components/ErrorValidation';
import { removeEmptyFields } from 'config/helpers';
import { useAppDispatch } from 'store/hooks';
import { IEditProfileFormData } from 'api/profile/types';
import { editProfile } from 'store/profile';

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
    formState: { isSubmitting, errors }
  } = useForm<any>({
    mode: 'onBlur'
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: IEditProfileFormData) => {
    if (data.sex === 'gender') {
      data.sex = '';
    }
    removeEmptyFields(data);
    dispatch(editProfile(data));
    closeEdit();
    reset();
  };

  const filterCity = createFilterOptions<string>();

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <ContainerForm title={'Персональні дані'}>
            <Box>
              <InputProfile placeholder="Ваше прізвище " name="last_name" register={register} />
            </Box>
            <Box>
              <InputProfile placeholder="Ваше ім’я " name="first_name" register={register} />
            </Box>

            <Box>
              <InputProfile placeholder="По-батькові" name="patronim_name" register={register} />
            </Box>
            <DatePicker control={control} />
            <Box>
              <InputProfile
                placeholder="+380 (___) __-__-___ "
                name="phone_num"
                register={register}
              />
            </Box>
            <Controller
              name="sex"
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
          </ContainerForm>

          <ContainerForm title="Адреса">
            <Box>
              <Controller
                name="address_city"
                control={control}
                //@ts-ignore
                render={({ field }) => {
                  return (
                    <Autocomplete
                      value={field.value}
                      onChange={(event, newValue) => {
                        field.onChange(newValue);
                      }}
                      filterOptions={(options, params) => {
                        const filtered = filterCity(options, params);
                        const { inputValue } = params;
                        const isExisting = options.some((option) => inputValue === option.title);
                        if (inputValue !== '' && !isExisting) {
                          filtered.push(inputValue);
                        }
                        return filtered;
                      }}
                      selectOnFocus
                      clearOnBlur
                      handleHomeEndKeys
                      clearIcon
                      options={oblastCenters}
                      getOptionLabel={(option) => option}
                      renderOption={(props, option) => <li {...props}>{option}</li>}
                      sx={{ width: '100%' }}
                      renderInput={(params) => {
                        //@ts-ignore
                        return <StyledTextField {...params} placeholder="Оберіть ваше місто" />;
                      }}
                    />
                  );
                }}
              />
            </Box>
            <Box>
              <InputProfile placeholder="Вулиця" name="address_street" register={register} />
            </Box>
            <HouseNumber>
              <Box>
                <InputProfile placeholder="Будинок" name="address_house" register={register} />
              </Box>
              <Box>
                <InputProfile placeholder="Корпус" name="address_appartment" register={register} />
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

export default ProfileFormUser;
