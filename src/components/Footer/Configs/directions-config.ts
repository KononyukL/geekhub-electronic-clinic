import ROUTES from '../../../routes/constants';

interface IDirectionsConfig {
  path: string;
  name: string;
}

export const DIRECTIONS_CONFIG = [
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Дерматологія'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Терапія'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Гастроентерологія'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Пульманологія'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Нейрологія'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'Кардіологія'
  }
] as IDirectionsConfig[];
