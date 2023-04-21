import ROUTES from '../../../routes/constants';

interface INavigationConfig {
  path: string;
  name: string;
}

export const NAVIGATION_CONFIG = [
  {
    path: ROUTES.HOME.PATH,
    name: 'Головна'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Спеціальності та лікарі'
  },
  {
    path: ROUTES.HOME.HASH_PATH.QUESTIONS,
    name: 'Поширені запитання'
  },
  {
    path: ROUTES.HOME.HASH_PATH.ABOUT_US,
    name: 'Про нас'
  },
  {
    path: ROUTES.HOME.HASH_PATH.CONTACTS,
    name: 'Контакти'
  }
] as INavigationConfig[];
