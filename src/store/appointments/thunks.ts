import { createAsyncThunk } from '@reduxjs/toolkit';
import { appointmentsApi } from 'api';
import { IFinishAppointmentData } from 'api/appointments/types';
import { toast } from 'react-toastify';

interface INewAppointment {
  doctor_id: string | undefined | number;
  date: string;
  time: string;
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

export const finishAppointment = createAsyncThunk(
  'finish-appointment',
  async (data: IFinishAppointmentData, { rejectWithValue }) => {
    try {
      await appointmentsApi.finishAppointment(data);
      toast.success('Візит успішно завершено');

      return true;
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
      toast.error(e.message || 'Something went wrong');
    }
  }
);
