import { createAsyncThunk } from '@reduxjs/toolkit';
import { doctorsApi } from '../../api';

interface IDoctor {
  doctorId: string | number;
  page?: number;
}

interface IFeedback {
  id: string | undefined;
  review_text: string;
  review_rating: number;
  created_at: string;
}

export const doctors = createAsyncThunk(
  'doctors',
  async ({ page }: any, { rejectWithValue }) => {
    try {
      return await doctorsApi.doctors({ page });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const doctor = createAsyncThunk(
  'doctor',
  async ({ doctorId }: IDoctor, { rejectWithValue }) => {
    try {
      return await doctorsApi.doctor({ doctorId });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const specializations = createAsyncThunk(
  'doctors/specializations',
  async (_, { rejectWithValue }) => {
    try {
      return await doctorsApi.specializations();
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const feedbacks = createAsyncThunk(
  'doctors/doctor-${doctorId}/reviews',
  async ({ doctorId, page }: { doctorId: string | number; page: any }, { rejectWithValue }) => {
    try {
      return await doctorsApi.feedbacks({ doctorId, page });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);

export const createFeedback = createAsyncThunk(
  'doctors/createFeedback',
  async ({ id, review_text, review_rating, created_at }: IFeedback, { rejectWithValue }) => {
    try {
      return await doctorsApi.createFeedback({ id, review_text, review_rating, created_at });
    } catch (e: any) {
      rejectWithValue(e.message || 'Something went wrong');
    }
  }
);
