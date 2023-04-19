import { createAsyncThunk } from '@reduxjs/toolkit';
import { profileApi } from 'api';
import { IGetProfileData } from 'api/profile/types';

export const getProfile = createAsyncThunk(
  'get-profile',
  async ({ id }: IGetProfileData, { rejectWithValue }) => {
    try {
      return await profileApi.getProfile({ id });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
