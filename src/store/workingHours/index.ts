import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { workingHours } from './thunks';
import { RootState } from '../index';

interface IWorkingHoursState {
  workingHours: any;
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
        state.workingHours = action.payload;
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
