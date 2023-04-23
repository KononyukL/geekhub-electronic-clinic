import { axiosInstance } from '../config';
import { IFinishAppointmentData, INewAppointment } from 'api/appointments/types';

export const appointmentsApi = {
  async newAppointment({ doctor_id, date, time }: INewAppointment) {
    const result = await axiosInstance.post(`new-appointment/${doctor_id}/${date}/${time}`);
    return result.data;
  },
  async finishAppointment({ id, formData }: IFinishAppointmentData) {
    const result = await axiosInstance.put(`active-appointments/appointment-${id}/close`, formData);
    return result.data;
  }
};
