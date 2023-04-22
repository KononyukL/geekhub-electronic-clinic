import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationApi } from 'api';
import { TStatusNotification } from './index';

export const allNotification = createAsyncThunk(
  'notification/allNotification',
  async (_, { rejectWithValue }) => {
    try {
      return await notificationApi.allNotification();
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const statusNotification = createAsyncThunk(
  'notification/statusNotification',
  async ({ id, title, text, is_read }: TStatusNotification, { rejectWithValue }) => {
    try {
      return await notificationApi.statusNotification({ id, title, text, is_read });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
