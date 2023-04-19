import { axiosInstance } from '../config';

export const authApi = {
  async login({ email, password }: { email: string; password: string }) {
    const result = await axiosInstance.post('accounts/login-user/', { email, password });
    return result.data;
  },
  async logout() {
    const result = await axiosInstance.get('accounts/logout-user');
    return result.data;
  }
};
