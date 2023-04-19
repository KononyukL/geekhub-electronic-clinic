import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, logout } from './thunks';
import { RootState } from '../index';

interface IAuthState {
  login: Record<string, unknown>;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IAuthState = {
  login: {},
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { login, logout };

export const {} = newsSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default newsSlice.reducer;
