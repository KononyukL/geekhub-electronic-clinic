import React, { FC } from 'react';
import { Button } from './styled';
import { ButtonProps } from '@mui/material';

const SubmitButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default SubmitButton;
