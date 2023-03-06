import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './auth';

export const index = configureStore({
  reducer: {
    auth
  }
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
