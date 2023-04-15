import { createAsyncThunk } from '@reduxjs/toolkit';
import { doctorsApi } from '../../api';

interface IDoctor {
  doctorId: string
}

export const doctors = createAsyncThunk('doctors', async (_, { rejectWithValue }) => {
  try {
    return await doctorsApi.doctors();
  } catch (e: any) {
    rejectWithValue(e.message || 'Something went wrong');
  }
});

export const doctor = createAsyncThunk(
  'doctor',
  async ({ doctorId }: IDoctor, { rejectWithValue }) => {
    try {
      return await doctorsApi.doctor({ doctorId });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const specializations = createAsyncThunk(
  'doctors/specializations',
  async (_, { rejectWithValue }) => {
    try {
      return await doctorsApi.specializations();
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
