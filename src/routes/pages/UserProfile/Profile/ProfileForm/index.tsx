import React from 'react';
import { Container, ContainerData, Form, Title } from './steled';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import Button from '../../../../../components/Button';
import { StyledInput } from '../HeaderProfile/steled';
import ContainerForm from './ContainerForm';

interface IFormLoginInput {
  firstName: string;
}

const ProfileForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting }
  } = useForm<any>({
    mode: 'onBlur',
    defaultValues: {
      firstName: 'Cnebsvjchbsdjhv'
    }
  });
  const onSubmit = async (data: IFormLoginInput) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContainerForm title={t('userProfile.profile.data')}>
          <StyledInput
            label="first Name"
            name="firstName"
            readOnly
            register={register}
            registerOptions={{
              required: `${t('validationErrors.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t('validationErrors.email')}`
              }
            }}
          />
          <StyledInput
            label="first Name"
            name="firstName"
            readOnly
            register={register}
            registerOptions={{
              required: `${t('validationErrors.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t('validationErrors.email')}`
              }
            }}
          />
          <StyledInput
            label="first Name"
            name="firstName"
            readOnly
            register={register}
            registerOptions={{
              required: `${t('validationErrors.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t('validationErrors.email')}`
              }
            }}
          />
          <StyledInput
            label="first Name"
            name="firstName"
            readOnly
            register={register}
            registerOptions={{
              required: `${t('validationErrors.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t('validationErrors.email')}`
              }
            }}
          />
          <StyledInput
            label="first Name"
            name="firstName"
            readOnly
            register={register}
            registerOptions={{
              required: `${t('validationErrors.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t('validationErrors.email')}`
              }
            }}
          />
          <StyledInput
            label="first Name"
            name="firstName"
            readOnly
            register={register}
            registerOptions={{
              required: `${t('validationErrors.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t('validationErrors.email')}`
              }
            }}
          />
          <StyledInput
            label="first Name"
            name="firstName"
            readOnly
            register={register}
            registerOptions={{
              required: `${t('validationErrors.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t('validationErrors.email')}`
              }
            }}
          />
          <StyledInput
            label="first Name"
            name="firstName"
            readOnly
            register={register}
            registerOptions={{
              required: `${t('validationErrors.required')}`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${t('validationErrors.email')}`
              }
            }}
          />
        </ContainerForm>

        {/*<ContainerForm*/}
        {/*  title={t('userProfile.profile.address')}*/}
        {/*  */}
        {/*/>*/}
        <ContainerData>
          <Title>{t('userProfile.profile.security')}</Title>
        </ContainerData>
        <Button children="Register" type="submit" disabled={!isValid || isSubmitting} />
      </Form>
    </Container>
  );
};

export default ProfileForm;
