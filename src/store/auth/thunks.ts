import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api';

interface IAuthLogin {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IAuthLogin, { rejectWithValue }) => {
    try {
      return await authApi.login({ email, password });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);