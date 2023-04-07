import { axiosInstance } from '../config';

export const doctorApi = {
  async doctor({}) {
    const result = await axiosInstance.post(``, {});
    return result.data;
  }
};
