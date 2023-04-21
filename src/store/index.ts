import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './auth';
import doctors from './doctors';
import workingHours from './workingHours';
import profile from './profile';
import appointments from './appointments';
import visits from './visits';

export const index = configureStore({
  reducer: {
    auth,
    doctors,
    workingHours,
    profile,
    appointments,
    visits
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
