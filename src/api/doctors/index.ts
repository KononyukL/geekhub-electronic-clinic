import { axiosInstance } from '../config';

export const doctorsApi = {
  async doctors() {
    const result = await axiosInstance.get('doctors');
    return result.data;
  },

  async doctor({ doctorId }: { doctorId: string | number }) {
    const result = await axiosInstance.get(`doctors/doctor-${doctorId}`);
    return result.data;
  },

  async specializations() {
    const result = await axiosInstance.get('specializations');
    return result.data;
  },

  async feedbacks({ doctorId }: { doctorId: string | number }) {
    const result = await axiosInstance.get(`doctors/doctor-${doctorId}/reviews`);
    return result.data;
  }
};
