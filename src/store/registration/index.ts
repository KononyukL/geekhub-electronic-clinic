import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registration } from './thunks';
import { RootState } from '../index';

interface IAuthState {
  user: Record<string, unknown>;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IAuthState = {
  user: {},
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registration.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { registration };
export const {} = newsSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default newsSlice.reducer;
