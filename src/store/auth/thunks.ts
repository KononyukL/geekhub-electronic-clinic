import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'api';
import { IFormLoginInput } from 'routes/pages/Login/interfaces';
import { TOKEN } from 'config';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IFormLoginInput, { rejectWithValue }) => {
    try {
      const data = await authApi.login({ email, password });
      localStorage.setItem(TOKEN, data.token);
      //JSON.stringify({ token: data.token, id: data.id, is_doctor: data.is_doctor })
      return data;
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
