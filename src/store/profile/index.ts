import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { editPassword, editProfile, getProfile } from './thunks';
import { RootState } from '../index';
import { IProfile } from 'api/profile/types';

interface IProfileState {
  profile: IProfile | null;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IProfileState = {
  profile: null,
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(editPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(editProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProfile.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export { getProfile, editPassword, editProfile };

export const {} = newsSlice.actions;

export const selectProfile = (state: RootState) => state.profile;

export default newsSlice.reducer;
