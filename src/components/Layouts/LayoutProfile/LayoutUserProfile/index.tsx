import React from 'react';
import { LinkProfile } from '../styled';
import LayoutProfile from '../index';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Visit } from 'assets/icons/visits.svg';
import ROUTES from 'routes/constants';
const LayoutUserProfile = () => {
  return (
    <LayoutProfile>
      <LinkProfile
        to={ROUTES.PROFILE_USER.PATH}
        className={({ isActive }) => (isActive ? 'active' : '')}>
        <Profile />
        Профіль
      </LinkProfile>
      <LinkProfile to={ROUTES.VISITS.PATH} className={({ isActive }) => (isActive ? 'active' : '')}>
        <Visit />
        Мої візити
      </LinkProfile>
      {/*<LinkProfile to={'/card'} className={({ isActive }) => (isActive ? 'active' : '')}>*/}
      {/*  <PatientCard />*/}
      {/*  {t('userProfile.link.card')}*/}
      {/*</LinkProfile>*/}
    </LayoutProfile>
  );
};

export default LayoutUserProfile;
