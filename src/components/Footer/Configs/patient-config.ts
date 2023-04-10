import ROUTES from '../../../routes/constants';

interface IPatientConfig {
  path: string;
  name: string;
}

export const PATIENT_CONFIG = [
  {
    path: ROUTES.HOME.HASH_PATH.ABOUT_US,
    name: 'layout.navigation.aboutUs'
  },
  {
    path: ROUTES.HOME.HASH_PATH.QUESTIONS,
    name: 'layout.navigation.questions'
  },
  {
    path: ROUTES.HOME.HASH_PATH.CONTACTS,
    name: 'layout.navigation.contacts'
  },
  {
    path: ROUTES.DOCTORS.PATH,
    name: 'layout.navigation.doctors'
  },
  {
    path: ROUTES.HOME.PATH,
    name: 'layout.footer.patient.address'
  }
] as IPatientConfig[];
