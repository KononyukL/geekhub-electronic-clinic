import { configureStore, ThunkAction, Action, AnyAction, combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import doctors from './doctors';
import workingHours from './workingHours';
import profile from './profile';
import appointments from './appointments';
import visits from './visits';
import cardPatient from './cardPatient';
import notification from './notification';

const appReducer = combineReducers({
  auth,
  doctors,
  workingHours,
  profile,
  appointments,
  visits,
  cardPatient,
  notification
});

const reducerProxy = (state: any, action: AnyAction) => {
  if (action.type === 'logout/LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const index = configureStore({
  reducer: reducerProxy
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
