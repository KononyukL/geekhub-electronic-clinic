import { axiosInstance } from '../config';

interface IWorkingHoursArgs {
  doctor_id?: string | number
  date: string;
}

export const workingHoursApi = {
  async workingHours({ doctor_id, date }: IWorkingHoursArgs) {
    const result = await axiosInstance.get(`/available-slots/${doctor_id}/${date}`);
    return result.data;
  }
};
