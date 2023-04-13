import { createAsyncThunk } from '@reduxjs/toolkit';
import { doctorsApi } from '../../api';

export const doctors = createAsyncThunk('doctors', async (_, { rejectWithValue }) => {
  try {
    return await doctorsApi.doctors();
  } catch (e: any) {
    rejectWithValue(e.message || 'Something went wrong');
  }
});

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
