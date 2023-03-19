import React from 'react';
import { Button } from './styled';

interface IButton extends React.ButtonHTMLAttributes<any> {
  children: string;
}

const SubmitButton: React.FC<IButton> = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  );
};

export default SubmitButton;
