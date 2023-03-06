import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login } from './thunks';

interface IAuthState {
  user: Record<string, unknown>;
  isLoading: boolean;
  error: Error;
}

const initialState = {
  user: {},
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
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { login };
export const {} = newsSlice.actions;

export const selectUser = (state: IAuthState) => state.user;

export default newsSlice.reducer;
