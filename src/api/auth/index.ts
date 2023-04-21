import { axiosInstance } from '../config';
import { IFormLoginInput } from 'routes/pages/Login/interfaces';

interface IFormRegistrationInput {
  email: string;
  first_name: string;
  last_name: string;
  phone_num: string | number;
  password: string;
}

export const authApi = {
  async login({ email, password }: IFormLoginInput) {
    const result = await axiosInstance.post('accounts/login-user/', { email, password });
    return result.data;
  },
  async logout() {
    const result = await axiosInstance.get('accounts/logout-user');
    return result.data;
  },
  async registration({
    email,
    first_name,
    last_name,
    phone_num,
    password
  }: IFormRegistrationInput) {
    const result = await axiosInstance.post(
      'accounts/register-user/',
      {
        email,
        first_name,
        last_name,
        phone_num,
        password
      },
      { method: 'POST' }
    );
    return result.data;
  }
};
