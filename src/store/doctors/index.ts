import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doctors, specializations } from './thunks';
import { RootState } from '../index';
import { TSpecializations } from 'api/doctors/types';

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
  doctors: IDoctor[];
  specializations: TSpecializations;
  isLoading: boolean;
  error: Error | string;
}

const initialState: IAuthState = {
  doctors: [
    {
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
    {
      firsName: 'Олександр',
      lastName: 'Ковальчук ',
      fullName: 'Миколайович',
      profession: 'Гастроентеролог',
      photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
      rating: '4.7',
      category: 'Вища',
      seniority: '17',
      price: '300',
      information:
        'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
    },
    {
      firsName: 'Юлія',
      lastName: 'Бондаренко',
      fullName: 'Макаріна',
      profession: 'Терапевт',
      photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
      rating: '4.7',
      category: 'Вища',
      seniority: '17',
      price: '300',
      information:
        'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
    },
    {
      firsName: 'Дмитро',
      lastName: 'Григоренко',
      fullName: 'Сергійович',
      profession: 'Пульмонолог',
      photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
      rating: '4.7',
      category: 'Вища',
      seniority: '17',
      price: '300',
      information:
        'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
    },
    {
      firsName: 'Сергій',
      lastName: 'Козак',
      fullName: 'Петрович',
      profession: 'Дерматолог',
      photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
      rating: '4.7',
      category: 'Вища',
      seniority: '17',
      price: '300',
      information:
        'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
    },
    {
      firsName: 'Ілона',
      lastName: 'Андрущенко',
      fullName: 'Макаріна',
      profession: 'Кардіолог',
      photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
      rating: '4.7',
      category: 'Вища',
      seniority: '17',
      price: '300',
      information:
        'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
    },
    {
      firsName: 'Олена',
      lastName: 'Гончаренко',
      fullName: 'Сергіївна',
      profession: 'Педіатр',
      photo: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
      rating: '4.7',
      category: 'Вища',
      seniority: '17',
      price: '300',
      information:
        'Валерій Володимирович є висококваліфікованим фахівцем в кардіології з колосальним досвідом роботи, член європейської асоціації кардіологів, автор численних статей, монографій і 10 патентів. Консультує і проводить лікування захворювань серцево-судинної системи і асоційованих з ними...'
    }
  ],
  specializations: [],
  isLoading: false,
  error: ''
};

export const newsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(doctors.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.doctors = action.payload;
      })
      .addCase(doctors.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(specializations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        specializations.fulfilled,
        (state, action: PayloadAction<TSpecializations | undefined>) => {
          state.isLoading = false;
          state.specializations = action.payload || [];
        }
      )
      .addCase(specializations.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { doctors };
export const {} = newsSlice.actions;

export const selectDoctors = (state: RootState) => state.doctors;

export default newsSlice.reducer;
