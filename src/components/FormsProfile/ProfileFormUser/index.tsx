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
import { Controller, useForm } from 'react-hook-form';
import ContainerForm from '../ContainerForm';
import MenuItem from '@mui/material/MenuItem';
import { Autocomplete, Box, createFilterOptions } from '@mui/material';
import { genderOptions, oblastCenters } from 'routes/pages/UserProfile/Profile/mockData';
import DatePicker from '../../DatePicker';
import { getAuthData, removeEmptyFields } from 'config/helpers';
import { useAppDispatch } from 'store/hooks';
import { IEditProfileFormData } from 'api/profile/types';
import { editProfile, getProfile } from 'store/profile';
import {
  emailValidation,
  nameValidation,
  numberValidation,
  phoneValidation,
  streetValidation
} from 'components/FormsProfile/ProfileFormUser/helpers';
import EditProfileError from 'components/FormsProfile/EditProfileError';

interface IProfileForm {
  closeEdit: () => void;
}
const ProfileFormUser: FC<IProfileForm> = ({ closeEdit }) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isDirty, isValid }
  } = useForm<IEditProfileFormData>({
    mode: 'onBlur'
  });

  const dispatch = useAppDispatch();
  const { user_id } = getAuthData();

  const onSubmit = async (data: IEditProfileFormData) => {
    if (data.sex === 'gender') {
      data.sex = '';
    }
    removeEmptyFields(data);
    if (user_id && Object.keys(data).length) {
      const { payload } = await dispatch(editProfile({ id: user_id, formData: data }));

      if (payload) {
        dispatch(getProfile({ id: user_id }));
      }
    }
    closeEdit();
    reset();
  };

  const filterCity = createFilterOptions<string>();

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <ContainerForm>
            <Box>
              <InputProfile
                isError={!!errors.last_name}
                placeholder="Ваше прізвище "
                name="last_name"
                register={register}
                registerOptions={nameValidation}
              />
              <EditProfileError error={errors.last_name} />
            </Box>
            <Box>
              <InputProfile
                isError={!!errors.first_name}
                placeholder="Ваше ім’я "
                name="first_name"
                register={register}
                registerOptions={nameValidation}
              />
              <EditProfileError error={errors.first_name} />
            </Box>

            <Box>
              <InputProfile
                isError={!!errors.patronim_name}
                placeholder="По-батькові"
                name="patronim_name"
                register={register}
                registerOptions={nameValidation}
              />
              <EditProfileError error={errors.patronim_name} />
            </Box>
            <DatePicker control={control} />
            <Box>
              <InputProfile
                isError={!!errors.phone_num}
                placeholder="+380 (___) __-__-___ "
                name="phone_num"
                register={register}
                registerOptions={phoneValidation}
              />
              <EditProfileError error={errors.phone_num} />
            </Box>
            <Box>
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
              <EditProfileError error={errors.sex} />
            </Box>
            <Box sx={{ width: '330px' }}>
              <InputProfile
                isError={!!errors.email}
                placeholder="Електронна пошта"
                name="email"
                register={register}
                registerOptions={emailValidation}
              />
              <EditProfileError error={errors.email} />
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
                        const isExisting = options.some((option) => inputValue === option);
                        if (inputValue !== '' && !isExisting) {
                          filtered.push(inputValue);
                        }
                        return filtered;
                      }}
                      selectOnFocus
                      clearOnBlur
                      handleHomeEndKeys
                      disableClearable
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
              <EditProfileError error={errors.address_city} />
            </Box>
            <Box>
              <InputProfile
                isError={!!errors.address_street}
                placeholder="Вулиця"
                name="address_street"
                register={register}
                registerOptions={streetValidation}
              />
              <EditProfileError error={errors.address_street} />
            </Box>
            <HouseNumber>
              <Box>
                <InputProfile
                  isError={!!errors.address_house}
                  placeholder="Будинок"
                  name="address_house"
                  register={register}
                  registerOptions={numberValidation}
                />
                <EditProfileError error={errors.address_house} />
              </Box>
              <Box>
                <InputProfile
                  isError={!!errors.address_appartment}
                  placeholder="Корпус"
                  name="address_appartment"
                  register={register}
                  registerOptions={numberValidation}
                />
                <EditProfileError error={errors.address_appartment} />
              </Box>
            </HouseNumber>
          </ContainerForm>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disabled={isSubmitting || !isDirty || !isValid}>
          Зберегти
        </Button>
      </Form>
    </Container>
  );
};

export default ProfileFormUser;
