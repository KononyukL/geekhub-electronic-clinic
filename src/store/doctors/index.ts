import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doctor, doctors, specializations, feedbacks, createFeedback } from './thunks';
import { RootState } from '../index';
import { initialState } from './initialState';

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

    builder
      .addCase(feedbacks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(feedbacks.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.feedbacks = action.payload;
      })
      .addCase(feedbacks.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(createFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFeedback.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.feedbacks = action.payload;
      })
      .addCase(createFeedback.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { doctors, doctor, specializations, feedbacks, createFeedback };

export const {} = newsSlice.actions;

export const selectDoctors = (state: RootState) => state.doctors;

export const clearAllData = createAction('CLEAR_ALL_DATA');

export default newsSlice.reducer;
