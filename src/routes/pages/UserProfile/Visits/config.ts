import PlannedVisits from './PlannedVisits';
import CompletedVisits from './CompletedVisits';

export const USER_VISITS_CONFIG = [
  {
    tabName: 'Заплановані',
    tabIndex: 0,
    component: PlannedVisits
  },
  {
    tabName: 'Завершені',
    tabIndex: 1,
    component: CompletedVisits
  }
];
