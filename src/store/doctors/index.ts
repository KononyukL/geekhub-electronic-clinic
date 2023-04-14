import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doctors, specializations } from './thunks';
import { RootState } from '../index';

export interface IDoctor {
  id: number;
  email: string;
  profile_image: string;
  last_name: string;
  first_name: string;
  patronim_name: string;
  specialization: string;
  price: number;
  category: string;
  experience: string;
  info: string;
  rating: number
}

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

export default newsSlice.reducer;
