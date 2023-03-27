import { axiosInstance } from '../config';

export const doctorsApi = {
  async doctors({}) {
    const result = await axiosInstance.post(``, {});
    return result.data;
  }
};
