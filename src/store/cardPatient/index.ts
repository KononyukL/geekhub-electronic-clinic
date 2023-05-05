import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCard } from './thunks';
import { RootState } from '../index';
import { ICardPatient } from 'api/card-patient/types';

interface ICardState {
  cardPatient: ICardPatient | null;
  isLoading: boolean;
  error: Error | string;
}

const initialState: ICardState = {
  cardPatient: null,
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'card-patient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCard.fulfilled, (state, action: PayloadAction<ICardPatient>) => {
        state.isLoading = false;
        state.cardPatient = action.payload;
      })
      .addCase(getCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export { getCard };

export const {} = newsSlice.actions;

export const selectCardPatient = (state: RootState) => state.cardPatient;

export default newsSlice.reducer;
