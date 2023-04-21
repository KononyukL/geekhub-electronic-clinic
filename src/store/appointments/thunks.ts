import { createAsyncThunk } from '@reduxjs/toolkit';
import { appointmentsApi } from '../../api';

interface INewAppointment {
  doctor_id: string | undefined | number,
  date: string,
  time: string
}

export const newAppointment = createAsyncThunk(
  'new-appointment/${doctor_id}/${data}/${time}',
  async ({ doctor_id, date, time }: INewAppointment, { rejectWithValue }) => {
    try {
      return await appointmentsApi.newAppointment({ doctor_id, date, time });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
