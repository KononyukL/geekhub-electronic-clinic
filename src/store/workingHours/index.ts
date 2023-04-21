import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { workingHours } from './thunks';
import { RootState } from '../index';

interface IWorkingHoursState {
  workingHours: {
    date: string;
    doctor_id: number | string;
    time: Record<string, boolean>;
  }[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IWorkingHoursState = {
  workingHours: [],
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'workingHours',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(workingHours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(workingHours.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;

        const newTime = action.payload;
        const oldDoctorIndex = state.workingHours.findIndex(
          (item: any) => item.doctor_id === newTime.doctor_id
        );

        if (oldDoctorIndex !== -1) {
          state.workingHours[oldDoctorIndex] = newTime;
        } else {
          state.workingHours.push(newTime);
        }
      })
      .addCase(workingHours.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { workingHours };
export const {} = newsSlice.actions;

export const selectWorkingHours = (state: RootState) => state.workingHours;

export default newsSlice.reducer;
