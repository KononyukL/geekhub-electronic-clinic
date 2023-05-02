import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  confirmVisits,
  deleteVisits,
  getFinishedVisits,
  getPatientFinishedVisits,
  getPDFLink,
  getPlannedVisits,
  getUnconfirmedVisits
} from './thunks';
import { RootState } from '../index';
import { IVisits } from 'api/visits/types';

interface IVisitState {
  finishedVisits: IVisits | null;
  plannedVisits: IVisits | null;
  unconfirmedVisits: IVisits | null;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IVisitState = {
  finishedVisits: null,
  plannedVisits: null,
  unconfirmedVisits: null,
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
      .addCase(getFinishedVisits.fulfilled, (state, action: PayloadAction<IVisits>) => {
        state.isLoading = false;
        state.finishedVisits = action.payload;
      })
      .addCase(getFinishedVisits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getPlannedVisits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPlannedVisits.fulfilled, (state, action: PayloadAction<IVisits>) => {
        state.isLoading = false;
        state.plannedVisits = action.payload;
      })
      .addCase(getPlannedVisits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getPatientFinishedVisits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPatientFinishedVisits.fulfilled, (state, action: PayloadAction<IVisits>) => {
        state.isLoading = false;
        state.finishedVisits = action.payload;
      })
      .addCase(getPatientFinishedVisits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getUnconfirmedVisits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUnconfirmedVisits.fulfilled, (state, action: PayloadAction<IVisits>) => {
        state.isLoading = false;
        state.unconfirmedVisits = action.payload;
      })
      .addCase(getUnconfirmedVisits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(deleteVisits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteVisits.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteVisits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(confirmVisits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmVisits.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(confirmVisits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getPDFLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPDFLink.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getPDFLink.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export {
  getFinishedVisits,
  getPlannedVisits,
  getUnconfirmedVisits,
  deleteVisits,
  confirmVisits,
  getPDFLink
};

export const {} = newsSlice.actions;

export const selectVisits = (state: RootState) => state.visits;

export default newsSlice.reducer;
