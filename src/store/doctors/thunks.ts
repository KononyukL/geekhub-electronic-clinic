import { createAsyncThunk } from '@reduxjs/toolkit';
import { doctorsApi } from '../../api';

export const doctors = createAsyncThunk('auth/doctors', async (_, { rejectWithValue }) => {
  try {
    return await doctorsApi.doctors({});
  } catch (e: any) {
    rejectWithValue(e.message || 'Something went wrong');
  }
});
