import QueriesPatient from './QueriesPatient';
import ActivePatient from './ActivePatient';

export const PATIENT_CONFIG = [
  {
    tabName: 'Запити',
    tabIndex: 0,
    component: QueriesPatient
  },
  {
    tabName: 'Активні',
    tabIndex: 1,
    component: ActivePatient
  }
];
