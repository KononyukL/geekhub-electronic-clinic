import QueriesPatient from './QueriesPatient';
import ActivePatient from './ActivePatient';
import HistoryPatient from 'routes/pages/DoctorProfile/Patient/HistoryPatient';

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
  },
  {
    tabName: 'Історія',
    tabIndex: 2,
    component: HistoryPatient
  }
];
