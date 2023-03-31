import { createAsyncThunk } from '@reduxjs/toolkit';
import { doctorApi } from '../../api';

export const doctor = createAsyncThunk('auth/doctor', async (_, { rejectWithValue }) => {
  try {
    return await doctorApi.doctor({});
  } catch (e) {
    rejectWithValue(e.message || 'Something went wrong');
  }
});
