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
  },
  async registerConfirm({
    userId,
    userToken
  }: {
    userId: string | undefined;
    userToken: string | undefined;
  }) {
    const result = await axiosInstance.post(`register-user-confirm/${userId}/${userToken}`);
    return result.data;
  },
  async resetPasswordConfirm({
    uid,
    token,
    new_password
  }: {
    uid: string | undefined;
    token: string | undefined;
    new_password: string;
  }) {
    const result = await axiosInstance.post(`password-reset-confirm/${uid}/${token}`, {
      uid,
      token,
      new_password
    });
    return result.data;
  }
};
