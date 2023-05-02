import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  login,
  logout,
  registration,
  resetPassword,
  registerConfirm,
  resetPasswordConfirm
} from './thunks';
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
      .addCase(login.fulfilled, (state, action: PayloadAction<Record<string, unknown>>) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.login = {};
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action: PayloadAction<Record<string, unknown>>) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(registration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action: PayloadAction<Record<string, unknown>>) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(registerConfirm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerConfirm.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(registerConfirm.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(resetPasswordConfirm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPasswordConfirm.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.login = action.payload;
      })
      .addCase(resetPasswordConfirm.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { login, logout, registration, resetPassword, registerConfirm, resetPasswordConfirm };

export const {} = newsSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default newsSlice.reducer;
