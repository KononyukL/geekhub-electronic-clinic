import { axiosInstance } from '../config';

export const workingHoursApi = {
  async workingHours({ doctor_id, date }: { doctor_id: string | undefined; date: string }) {
    const result = await axiosInstance.get(`/available-slots/${doctor_id}/${date}`);
    return result.data;
  }
};
