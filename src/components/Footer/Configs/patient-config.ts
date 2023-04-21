import ROUTES from '../../../routes/constants';

interface IPatientConfig {
  path: string;
  name: string;
}

export const PATIENT_CONFIG = [
  {
    path: ROUTES.HOME.HASH_PATH.ABOUT_US,
    name: 'Про нас'
  },
  {
    path: ROUTES.HOME.HASH_PATH.QUESTIONS,
    name: 'Поширені запитання'
  },
  {
    path: ROUTES.HOME.HASH_PATH.CONTACTS,
    name: 'Контакти'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Спеціальності та лікарі'
  },
  {
    path: ROUTES.HOME.PATH,
    name: 'Адреса'
  }
] as IPatientConfig[];
