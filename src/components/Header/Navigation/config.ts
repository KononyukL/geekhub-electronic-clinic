import ROUTES from '../../../routes/constants';

interface INavigationConfig {
  path: string;
  name: string;
}

export const NAVIGATION_CONFIG = [
  {
    path: ROUTES.HOME.PATH,
    name: 'layout.navigation.home'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.navigation.doctors'
  },
  {
    path: ROUTES.HOME.HASH_PATH.QUESTIONS,
    name: 'layout.navigation.questions'
  },
  {
    path: ROUTES.HOME.HASH_PATH.ABOUT_US,
    name: 'layout.navigation.aboutUs'
  },
  {
    path: ROUTES.HOME.HASH_PATH.CONTACTS,
    name: 'layout.navigation.contacts'
  }
] as INavigationConfig[];
