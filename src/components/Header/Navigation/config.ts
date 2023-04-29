import ROUTES from '../../../routes/constants';

interface INavigationConfig {
  path: string;
  name: string;
  isLink?: boolean;
}

export const NAVIGATION_CONFIG = [
  {
    path: ROUTES.HOME.PATH,
    name: 'Головна',
    isLink: true
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Спеціальності та лікарі',
    isLink: true
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
