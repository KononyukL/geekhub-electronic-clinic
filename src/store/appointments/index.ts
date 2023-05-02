import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { finishAppointment, newAppointment } from './thunks';
import { RootState } from '../index';

interface IAppointmentState {
  appointments: Record<string, unknown>;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IAppointmentState = {
  appointments: {},
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        newAppointment.fulfilled,
        (state, action: PayloadAction<Record<string, unknown>>) => {
          state.isLoading = false;
          state.appointments = action.payload;
        }
      )
      .addCase(newAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(finishAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(finishAppointment.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(finishAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export { newAppointment, finishAppointment };

export const {} = newsSlice.actions;

export const selectAppointments = (state: RootState) => state.appointments;

export default newsSlice.reducer;
