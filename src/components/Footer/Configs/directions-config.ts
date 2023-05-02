import ROUTES from '../../../routes/constants';

interface IDirectionsConfig {
  path: string;
  name: string;
}

export const DIRECTIONS_CONFIG = [
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=Дерматолог',
    name: 'Дерматологія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=Терапевт',
    name: 'Терапія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=Гастроентеролог',
    name: 'Гастроентерологія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=Пульмонолог',
    name: 'Пульмонологія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=Невролог',
    name: 'Неврологія'
  },
  {
    path: ROUTES.DOCTORS.PATH + '?specialist=Кардіолог',
    name: 'Кардіологія'
  }
] as IDirectionsConfig[];
