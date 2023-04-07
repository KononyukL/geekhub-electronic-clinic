import ROUTES from '../../../routes/constants';

interface IDirectionsConfig {
  path: string;
  name: string;
}

export const DIRECTIONS_CONFIG = [
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.footer.directions.dermatology'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.footer.directions.therapy'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.footer.directions.gastroenterology'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.footer.directions.pulmonology'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.footer.directions.neuroscience'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.footer.directions.cardiology'
  }
] as IDirectionsConfig[];
