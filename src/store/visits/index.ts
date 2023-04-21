import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteVisits, getFinishedVisits, getPlannedVisits } from './thunks';
import { RootState } from '../index';
import { IVisits } from 'api/visits/types';

interface IVisitState {
  finishedVisits: IVisits | null;
  plannedVisits: IVisits | null;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IVisitState = {
  finishedVisits: null,
  plannedVisits: null,
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFinishedVisits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFinishedVisits.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.finishedVisits = action.payload;
      })
      .addCase(getFinishedVisits.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getPlannedVisits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPlannedVisits.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.plannedVisits = action.payload;
      })
      .addCase(getPlannedVisits.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteVisits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVisits.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteVisits.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { getFinishedVisits, getPlannedVisits, deleteVisits };

export const {} = newsSlice.actions;

export const selectVisits = (state: RootState) => state.visits;

export default newsSlice.reducer;
