import React from 'react';
import { LinkProfile } from '../styled';
import LayoutProfile from '../index';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as Patients } from 'assets/icons/patient-card.svg';
import ROUTES from 'routes/constants';
const LayoutDoctorProfile = () => {
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
