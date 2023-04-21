import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newAppointment } from './thunks';
import { RootState } from '../index';

interface IAppointmentState {
  login: Record<string, unknown>;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IAppointmentState = {
  login: {},
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
      .addCase(newAppointment.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(newAppointment.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { newAppointment };

export const {} = newsSlice.actions;

export const selectAppointments = (state: RootState) => state.appointments;

export default newsSlice.reducer;