import ROUTES from '../../../routes/constants';

interface IDirectionsConfig {
  path: string;
  name: string;
}

export const DIRECTIONS_CONFIG = [
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=1',
    name: 'Дерматологія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=6',
    name: 'Терапія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=5',
    name: 'Гастроентерологія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=3',
    name: 'Пульмонологія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=7',
    name: 'Неврологія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=2',
    name: 'Кардіологія'
  }
] as IDirectionsConfig[];
