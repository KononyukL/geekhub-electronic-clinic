import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allNotification } from './thunks';
import { RootState } from '../index';

type IAllNotification = {
  id: number;
  title: string;
  text: string;
  is_read: boolean;
}

type TAllNotification = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IAllNotification[];
};

interface INotification {
  allNotification: TAllNotification;
  isLoading: boolean;
  error: Error | string;
}

const initialState: INotification = {
  allNotification: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allNotification.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.allNotification = action.payload;
      })
      .addCase(allNotification.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { allNotification };

export const {} = newsSlice.actions;

export const selectNotification = (state: RootState) => state.notification;

export default newsSlice.reducer;
