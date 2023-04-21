import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'api';
import { AUTH_DATA } from 'config';
import { NavigateFunction } from 'react-router-dom';
import ROUTES from 'routes/constants';

interface IAuthLogin {
  email: string;
  password: string;
}

interface IFormRegistrationInput {
  email: string;
  first_name: string;
  last_name: string;
  phone_num: string | number;
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

export const registration = createAsyncThunk(
  'auth/registration',
  async (
    { email, first_name, last_name, phone_num, password }: IFormRegistrationInput,
    { rejectWithValue }
  ) => {
    try {
      return await authApi.registration({
        email,
        first_name,
        last_name,
        phone_num,
        password
      });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
