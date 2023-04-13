import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './auth';
import doctors from './doctors';
import doctor from './doctor';
import workingHours from './workingHours';

export const index = configureStore({
  reducer: {
    auth,
    doctors,
    doctor,
    workingHours,
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
