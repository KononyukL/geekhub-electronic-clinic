import React from 'react';
import { LinkProfile } from '../styled';
import LayoutProfile from '../index';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Visit } from 'assets/icons/visits.svg';
import ROUTES from 'routes/constants';
import { Navigate } from 'react-router-dom';
import { getAuthData } from 'config/helpers';
const LayoutUserProfile = () => {
  const { token, is_doctor } = getAuthData();

  if (!token || is_doctor) {
    return <Navigate to={ROUTES.HOME.PATH} />;
  }

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
