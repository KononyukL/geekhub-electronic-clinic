import React, { FC } from 'react';
import { Text } from './styled';

interface IErrorValidation {
  errors: any;
}

const ErrorValidation: FC<IErrorValidation> = ({ errors }) => {
  return <>{errors && <Text>{errors?.message}</Text>}</>;
};

export default ErrorValidation;
