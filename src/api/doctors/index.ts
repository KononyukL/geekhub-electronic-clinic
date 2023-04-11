import { axiosInstance } from '../config';
import { specializationsNormalizer } from './normalizer';

export const doctorsApi = {
  async doctors({}) {
    const result = await axiosInstance.post(``, {});
    return result.data;
  },

  async specializations() {
    const result = await axiosInstance.get('specializations');
    return specializationsNormalizer(result.data);
  }
};
