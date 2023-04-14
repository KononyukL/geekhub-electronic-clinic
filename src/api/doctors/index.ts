import { axiosInstance } from '../config';

export const doctorsApi = {
  async doctors() {
    const result = await axiosInstance.get('doctors');
    return result.data;
  },

  async specializations() {
    const result = await axiosInstance.get('specializations');
    return result.data;
  }
};