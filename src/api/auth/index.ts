import { axiosInstance } from '../config';
import { IFormLoginInput } from 'routes/pages/Login/interfaces';

export const authApi = {
  async login({ email, password }: IFormLoginInput) {
    const result = await axiosInstance.post('accounts/login-user/', { email, password });
    return result.data;
  },
  async logout() {
    const result = await axiosInstance.get('accounts/logout-user');
    return result.data;
  }
};
