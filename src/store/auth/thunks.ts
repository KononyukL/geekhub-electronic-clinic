import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'api';
import { AUTH_DATA } from 'config';
import ROUTES from 'routes/constants';
import { IFormRegistrationInput } from 'routes/pages/Registration/interfaces';
import { IResetPasswordInput } from 'routes/pages/ResetPassword/interfaces';
import { IFormLoginInput } from 'routes/pages/Login/interfaces';
import { NavigateFunction } from 'react-router-dom';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IFormLoginInput, { rejectWithValue }) => {
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
  async (navigate: NavigateFunction, { rejectWithValue, dispatch }) => {
    try {
      await authApi.logout();
      localStorage.removeItem(AUTH_DATA);
      dispatch({ type: 'logout/LOGOUT' });
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

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email }: IResetPasswordInput, { rejectWithValue }) => {
    try {
      return await authApi.resetPassword({ email });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
