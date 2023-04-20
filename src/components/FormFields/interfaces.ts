import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface IInputFormField extends React.InputHTMLAttributes<any> {
  register: UseFormRegister<FieldValues>;
  errors: any;
  getValues?: any;
}
