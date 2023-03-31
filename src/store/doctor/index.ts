import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doctor } from './thunks';
import { RootState } from '../index';

interface IDoctor {
  firsName: string;
  lastName: string;
  fullName: string;
  profession: string;
  photo: string;
  rating: string;
  category: string;
  seniority: string;
  price: string;
  information: string;
}

interface IAuthState {
  doctor: IDoctor;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IAuthState = {
  doctor: {
      firsName: 'Ілона',
      lastName: 'Андрущенко',
      fullName: 'Макаріна',
      profession: 'Гастроентеролог',
      photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
      rating: '4.7',
      category: 'Вища',
      seniority: '17',
      price: '300',
      information:
        'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
    },
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(doctor.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.doctor = action.payload;
      })
      .addCase(doctor.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { doctor };
export const {} = newsSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default newsSlice.reducer;
