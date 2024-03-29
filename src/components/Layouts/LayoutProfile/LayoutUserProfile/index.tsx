import React, { useEffect } from 'react';
import { LinkProfile } from '../styled';
import LayoutProfile from '../index';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Visit } from 'assets/icons/visits.svg';
import { ReactComponent as Card } from 'assets/icons/patient-card.svg';
import ROUTES from 'routes/constants';
import { Navigate } from 'react-router-dom';
import { getAuthData } from 'config/helpers';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getProfile, selectProfile } from 'store/profile';

const LayoutUserProfile = () => {
  const { token, is_doctor, user_id } = getAuthData();
  const { profile } = useAppSelector(selectProfile);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user_id && !is_doctor) {
      dispatch(getProfile({ id: user_id }));
    }
  }, [user_id]);

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
      {profile && profile.card_id && (
        <LinkProfile to={'/card'} className={({ isActive }) => (isActive ? 'active' : '')}>
          <Card />
          Картка пацієнта
        </LinkProfile>
      )}
    </LayoutProfile>
  );
};

export default LayoutUserProfile;
