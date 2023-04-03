import Profile from './Profile';
import Visits from './Visits';
import MyCard from './MyCard';

export const USER_PROFILE_CONFIG = [
  {
    tabName: 'userProfile.tabs.profile',
    tabIndex: 0,
    component: Profile
  },
  {
    tabName: 'userProfile.tabs.visits',
    tabIndex: 1,
    component: Visits
  },
  {
    tabName: 'userProfile.tabs.card',
    tabIndex: 2,
    component: MyCard
  }
];
