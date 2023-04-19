import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doctor, doctors, specializations } from './thunks';
import { RootState } from '../index';
import { IDoctor } from '../../routes/pages/Doctor/interfaces';

export interface ISpecialization {
  name: string;
  image: string;
}

export type TDoctorsApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IDoctor[];
};

export type TSpecializations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISpecialization[];
};

interface IAuthState {
  doctors: TDoctorsApiResponse;
  doctor: IDoctor;
  specializations: TSpecializations;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IAuthState = {
  doctors: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
  doctor: {
    id: 0,
    email: '',
    profile_image: '',
    last_name: '',
    first_name: '',
    patronim_name: '',
    specialization: '',
    price: 0,
    category: '',
    experience: '',
    info: '',
    education: '',
    courses: '',
    procedures_performed: '',
    rating: 0
  },
  specializations: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(doctors.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.doctors = action.payload;
      })
      .addCase(doctors.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(clearAllData, () => initialState)
      .addCase(doctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(doctor.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.doctor = action.payload;
      })
      .addCase(doctor.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(specializations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(specializations.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.specializations = action.payload;
      })
      .addCase(specializations.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { doctors };

export const {} = newsSlice.actions;

export const selectDoctors = (state: RootState) => state.doctors;

export const clearAllData = createAction('CLEAR_ALL_DATA');

export default newsSlice.reducer;
