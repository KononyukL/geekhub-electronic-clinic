import { axiosInstance } from '../config';

export const authApi = {
  async login({}) {
    const result = await axiosInstance.post(``, {});
    return result.data;
  }
};
