import React, { FC } from 'react';
import { Text } from './styled';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface IErrorValidation {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const EditProfileError: FC<IErrorValidation> = ({ error }) => {
  return <Text>{error?.message || ''}</Text>;
};

export default EditProfileError;
