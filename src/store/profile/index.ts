import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProfile } from './thunks';
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
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { getProfile };

export const {} = newsSlice.actions;

export const selectProfile = (state: RootState) => state.profile;

export default newsSlice.reducer;
