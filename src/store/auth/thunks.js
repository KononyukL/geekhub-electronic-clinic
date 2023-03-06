import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api';

export const login = createAsyncThunk('auth/login', async (_, { rejectWithValue }) => {
  try {
    return await authApi.login({});
  } catch (e) {
    rejectWithValue(e.message || 'Something went wrong');
  }
});
