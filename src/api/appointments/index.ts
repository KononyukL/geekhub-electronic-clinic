import { axiosInstance } from '../config';

interface INewAppointment {
  doctor_id: string | undefined | number,
  date: string,
  time: string
}

export const appointmentsApi = {
  async newAppointment({ doctor_id, date, time }: INewAppointment) {
    const result = await axiosInstance.post(`new-appointment/${doctor_id}/${date}/${time}`)
    return result.data
  }
}