import { createAsyncThunk } from '@reduxjs/toolkit';
import { workingHoursApi } from '../../api';

interface WorkingHoursArgs {
  doctor_id: number;
  date: string;
}

export const workingHours = createAsyncThunk(
  'available-slots/{doctor_id}/{date}',
  async ({ doctor_id, date }: WorkingHoursArgs, { rejectWithValue }) => {
    try {
      return await workingHoursApi.workingHours({ doctor_id, date });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

