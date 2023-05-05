import { createSlice } from '@reduxjs/toolkit';
import { finishAppointment, newAppointment } from './thunks';
import { RootState } from '../index';

interface IAppointment {
  id: string;
  doctor_id: string;
  date: string;
  time: string;
  patient_name: string;
  patient_email: string;
  patient_phone: string;
}

interface IAppointmentState {
  appointments: IAppointment[];
  isLoading: boolean;
  error: string | Error | null;
}

const initialState: IAppointmentState = {
  appointments: [],
  isLoading: false,
  error: null
};

export const newsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    clearError: (state: any) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(newAppointment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(newAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointments.push(action.payload);
      })
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
