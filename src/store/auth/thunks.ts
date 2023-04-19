import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'api';
import { AUTH_DATA } from 'config';
import { axiosInstance } from 'api/config';
import { NavigateFunction } from 'react-router-dom';
import ROUTES from 'routes/constants';

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

      if (data.token) {
        axiosInstance.interceptors.request.use((config) => {
          config.headers.Authorization = `Token ${data.token}`;
          return config;
        });
      }

      return data;
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (navigate: NavigateFunction, { rejectWithValue }) => {
    try {
      await authApi.logout();
      localStorage.removeItem(AUTH_DATA);
      navigate(ROUTES.HOME.PATH);
      return {};
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
