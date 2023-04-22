import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationApi } from 'api';

export const allNotification = createAsyncThunk(
  'auth/resetPassword',
  async (_, { rejectWithValue }) => {
    try {
      return await notificationApi.allNotification();
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
