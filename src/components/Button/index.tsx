import React from 'react';
import { Button } from './styled';

interface IButton extends React.ButtonHTMLAttributes<any> {
  label: string;
}

const SubmitButton: React.FC<IButton> = ({ label, ...rest }) => {
  return (
    <Button {...rest}>
      {label}
    </Button>
  );
};

export default SubmitButton;
