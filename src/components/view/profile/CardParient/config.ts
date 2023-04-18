import ConclusionDoctor from './ConclusionDoctor';
import MedicalHistory from './MedicalHistory';

export const PATIENT_CARD_CONFIG = [
  {
    tabName: 'Історія хвороби',
    tabIndex: 0,
    component: MedicalHistory
  },
  {
    tabName: 'Заключення',
    tabIndex: 1,
    component: ConclusionDoctor
  }
];
