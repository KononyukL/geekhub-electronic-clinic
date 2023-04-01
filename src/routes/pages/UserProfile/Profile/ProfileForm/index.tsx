import React, { FC } from 'react';
import {
  Container,
  ErrorText,
  Form,
  HouseNumber,
  StyledDataPicker,
  StyledSelect,
  WrapInput
} from './styled';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../../../../components/Button';
import ContainerForm from './ContainerForm';
import dayjs from 'dayjs';
import Input from '../../../../../components/Input';
import { Label } from '../HeaderProfile/styled';
import MenuItem from '@mui/material/MenuItem';

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
const genderOptions = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' }
];

interface IProfileForm {
  isEdit: boolean;
}
const ProfileForm: FC<IProfileForm> = ({ isEdit }) => {
  const { t } = useTranslation();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      firstName: 'Стерненко',
      lastName: 'Ілона',
      middleName: 'Макарівна',
      birthday: '12.03.1983',
      email: '123@gmail.com',
      phone: '+38 (099) 133 27 12',
      street: 'Сагайдачного',
      house: '17',
      apartment: '17'
    }
  });

  const onSubmit = async (data: IFormLoginInput) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContainerForm title={t('userProfile.profile.data.personalData')}>
          <WrapInput>
            <Input
              label={t('userProfile.profile.data.lastName')}
              name="lastName"
              readOnly={!isEdit}
              register={register}
              registerOptions={{
                required: `${t('validationErrors.required')}`,
                minLength: { value: 3, message: `${t('validationErrors.email')}` },
                maxLength: { value: 255, message: `${t('validationErrors.email')}` }
              }}
            />
            {errors.firstName?.message && <ErrorText>{errors.firstName.message}</ErrorText>}
          </WrapInput>
          <WrapInput>
            <Input
              label={t('userProfile.profile.data.firstName')}
              name="firstName"
              readOnly={!isEdit}
              register={register}
              registerOptions={{
                required: `${t('validationErrors.required')}`,
                minLength: { value: 3, message: `${t('validationErrors.email')}` },
                maxLength: { value: 255, message: `${t('validationErrors.email')}` }
              }}
            />
            {errors.lastName?.message && <ErrorText>{errors.lastName.message}</ErrorText>}
          </WrapInput>

          <WrapInput>
            <Input
              label={t('userProfile.profile.data.middleName')}
              name="middleName"
              readOnly={!isEdit}
              register={register}
              registerOptions={{
                required: `${t('validationErrors.required')}`,
                minLength: { value: 3, message: `${t('validationErrors.email')}` },
                maxLength: { value: 255, message: `${t('validationErrors.email')}` }
              }}
            />
            {errors.middleName?.message && <ErrorText>{errors.middleName.message}</ErrorText>}
          </WrapInput>

          <WrapInput>
            <Label>
              {t('userProfile.profile.data.birthday')}
              <Controller
                name="birthday"
                control={control}
                defaultValue={null}
                render={({ field, ...props }) => {
                  return (
                    <StyledDataPicker
                      disabled={!isEdit}
                      value={dayjs(field.value, 'DD.MM.YYYY')}
                      onChange={(date) => {
                        field.onChange(dayjs(date as dayjs.ConfigType).format('DD.MM.YYYY'));
                      }}
                      format="DD.MM.YYYY"
                    />
                  );
                }}
              />
            </Label>
          </WrapInput>

          <WrapInput>
            <Input
              label={t('userProfile.profile.data.email')}
              name="email"
              readOnly={!isEdit}
              register={register}
              registerOptions={{
                required: `${t('validationErrors.required')}`,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: `${t('validationErrors.email')}`
                }
              }}
            />
            {errors.email?.message && <ErrorText>{errors.email.message}</ErrorText>}
          </WrapInput>
          <WrapInput>
            <Input
              label={t('userProfile.profile.data.phone')}
              name="phone"
              readOnly={!isEdit}
              register={register}
              registerOptions={{
                required: `${t('validationErrors.required')}`
              }}
            />
            {errors.phone?.message && <ErrorText>{errors.phone.message}</ErrorText>}
          </WrapInput>
          <Label>
            {t('userProfile.profile.data.gender')}
            <Controller
              name="gender"
              control={control}
              defaultValue={null}
              render={({ field, ...props }) => {
                return (
                  <StyledSelect
                    value={field.value}
                    // renderValue={field.value || 'Choose gender'}
                    onChange={(event) => {
                      field.onChange(event);
                    }}>
                    {genderOptions.map(({ label, value }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                );
              }}
            />
          </Label>
        </ContainerForm>

        <ContainerForm title={t('userProfile.profile.address.address')}>
          <WrapInput>
            <Label>
              {t('userProfile.profile.address.city')}
              <Controller
                name="city"
                control={control}
                defaultValue={null}
                render={({ field, ...props }) => {
                  return (
                    <StyledSelect
                      value={field.value}
                      onChange={(event) => {
                        field.onChange(event);
                      }}>
                      {genderOptions.map((option, i) => (
                        <MenuItem key={i} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  );
                }}
              />
            </Label>
          </WrapInput>
          <WrapInput>
            <Input
              label={t('userProfile.profile.address.street')}
              name="street"
              readOnly={!isEdit}
              register={register}
              registerOptions={{
                required: `${t('validationErrors.required')}`,
                minLength: { value: 3, message: `${t('validationErrors.email')}` },
                maxLength: { value: 255, message: `${t('validationErrors.email')}` }
              }}
            />
            {errors.street?.message && <ErrorText>{errors.street.message}</ErrorText>}
          </WrapInput>
          <HouseNumber>
            <WrapInput>
              <Input
                label={t('userProfile.profile.address.house')}
                name="house"
                readOnly={!isEdit}
                register={register}
                registerOptions={{
                  required: `${t('validationErrors.required')}`
                }}
              />
              {errors.house?.message && <ErrorText>{errors.house.message}</ErrorText>}
            </WrapInput>
            <WrapInput>
              <Input
                label={t('userProfile.profile.address.apartment')}
                name="apartment"
                readOnly={!isEdit}
                register={register}
                registerOptions={{
                  required: `${t('validationErrors.required')}`
                }}
              />
              {errors.apartment?.message && <ErrorText>{errors.apartment.message}</ErrorText>}
            </WrapInput>
          </HouseNumber>
        </ContainerForm>
        <ContainerForm title={t('userProfile.profile.security.security')}>
          <WrapInput>
            <Input
              label={t('userProfile.profile.security.oldPassword')}
              name="oldPassword"
              readOnly={!isEdit}
              type="password"
              register={register}
              registerOptions={
                {
                  // required: `${t('validationErrors.required')}`,
                  // pattern: {
                  //   value:
                  //     /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,255}$/,
                  //   message: `${t('validationErrors.password')}`
                  // }
                }
              }
            />
            {errors.oldPassword?.message && <ErrorText>{errors.oldPassword.message}</ErrorText>}
          </WrapInput>
          <WrapInput>
            <Input
              label={t('userProfile.profile.security.newPassword')}
              name="newPassword"
              readOnly={!isEdit}
              type="password"
              register={register}
              registerOptions={
                {
                  // required: `${t('validationErrors.required')}`
                  // pattern: {
                  //   value:
                  //     /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,255}$/,
                  //   message: `${t('validationErrors.password')}`
                  // }
                }
              }
            />
            {errors.newPassword?.message && <ErrorText>{errors.newPassword.message}</ErrorText>}
          </WrapInput>
          <WrapInput>
            <Input
              label={t('userProfile.profile.security.config')}
              name="config"
              readOnly={!isEdit}
              type="password"
              register={register}
              registerOptions={
                {
                  // required: `${t('validationErrors.required')}`
                  // pattern: {
                  //   value:
                  //     /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,255}$/,
                  //   message: `${t('validationErrors.password')}`
                  // }
                }
              }
            />
            {errors.config?.message && <ErrorText>{errors.config.message}</ErrorText>}
          </WrapInput>
        </ContainerForm>
        <Button children={t('buttons.save')} type="submit" disabled={!isValid || isSubmitting} />
      </Form>
    </Container>
  );
};

export default ProfileForm;
