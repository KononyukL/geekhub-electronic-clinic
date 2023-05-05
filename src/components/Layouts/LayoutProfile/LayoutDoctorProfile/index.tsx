import React from 'react';
import { LinkProfile } from '../styled';
import LayoutProfile from '../index';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Patients } from 'assets/icons/patient-card.svg';
import ROUTES from 'routes/constants';
import { getAuthData } from 'config/helpers';
import { Navigate } from 'react-router-dom';
const LayoutDoctorProfile = () => {
  const { token, is_doctor } = getAuthData();

  if (!token || !is_doctor) {
    return <Navigate to={ROUTES.HOME.PATH} />;
  }

  return (
    <LayoutProfile>
      <LinkProfile
        to={ROUTES.PROFILE_DOCTOR.PATH}
        className={({ isActive }) => (isActive ? 'active' : '')}>
        <Profile />
        Профіль
      </LinkProfile>
      <LinkProfile
        to={ROUTES.PATIENTS_DOCTOR.PATH}
        className={({ isActive }) => (isActive ? 'active' : '')}>
        <Patients />
        Пацієнти
      </LinkProfile>
    </LayoutProfile>
  );
};

export default LayoutDoctorProfile;
