import PlannedVisits from './PlannedVisits';
import CompletedVisits from './CompletedVisits';

export const USER_VISITS_CONFIG = [
  {
    tabName: 'userProfile.visits.tabs.planned',
    tabIndex: 0,
    component: PlannedVisits
  },
  {
    tabName: 'userProfile.visits.tabs.completed',
    tabIndex: 1,
    component: CompletedVisits
  }
];
