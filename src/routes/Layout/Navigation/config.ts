import ROUTES from '../../constants';

interface INavigationConfig {
  path: string;
  name: string;
  isHeader?: boolean;
}

export const NAVIGATION_CONFIG = [
  {
    path: ROUTES.HOME.PATH,
    name: 'layout.navigation.home',
    isHeader: true
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.navigation.doctors'
  }
] as INavigationConfig[];
