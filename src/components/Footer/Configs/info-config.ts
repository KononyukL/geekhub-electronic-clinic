import ROUTES from 'routes/constants';

interface IInfoConfig {
  path: string;
  name: string;
}

export const INFO_CONFIG = [
  {
    path: ROUTES.TERMS.PATH + '/terms',
    name: 'Умови користування'
  },
  {
    path: ROUTES.TERMS.PATH + '/privacy',
    name: 'Політика конфіденційності'
  },
  {
    path: ROUTES.TERMS.PATH + '/offer',
    name: 'Договір оферти'
  }
] as IInfoConfig[];
