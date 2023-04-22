import { axiosInstance } from '../config';
import { IFormLoginInput } from 'routes/pages/Login/interfaces';
import { IFormRegistrationInput } from 'routes/pages/Registration/interfaces';
import { IResetPasswordInput } from 'routes/pages/ResetPassword/interfaces';

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
  },
  async resetPassword({ email }: IResetPasswordInput) {
    const result = await axiosInstance.post('accounts/password-reset/', { email });
    return result.data;
  }
};
