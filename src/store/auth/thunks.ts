import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'api';
import { AUTH_DATA } from 'config';

interface IAuthLogin {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IAuthLogin, { rejectWithValue }) => {
    try {
      const data = await authApi.login({ email, password });
      localStorage.setItem(AUTH_DATA, JSON.stringify(data));

      return data;
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
