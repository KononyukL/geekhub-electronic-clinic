import { createAsyncThunk } from '@reduxjs/toolkit';
import { registrationApi } from '../../api';

export const registration = createAsyncThunk('auth/registration', async (_, { rejectWithValue }) => {
  try {
    return await registrationApi.doctors({});
  } catch (e) {
    rejectWithValue(e.message || 'Something went wrong');
  }
});
