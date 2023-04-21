import { createAsyncThunk } from '@reduxjs/toolkit';
import { profileApi } from 'api';
import { IEditPasswordData, IEditProfileFormData, IGetProfileData } from 'api/profile/types';
import { toast } from 'react-toastify';

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

export const editPassword = createAsyncThunk(
  'edit-password',
  async (data: IEditPasswordData, { rejectWithValue }) => {
    try {
      await profileApi.editPassword(data);
      toast.success('Пароль успішно змінено');
    } catch (e: any) {
      toast.error(e.message || 'Something went wrong');
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
export const editProfile = createAsyncThunk(
  'edit-profile',
  async (data: IEditProfileFormData, { rejectWithValue }) => {
    try {
      await profileApi.editProfile(data);
      toast.success('Ваші дані успішно змінені');
    } catch (e: any) {
      toast.error(e.message || 'Something went wrong');
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
