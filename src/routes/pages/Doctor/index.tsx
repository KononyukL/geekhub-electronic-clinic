import React, { useState } from 'react';
import { Wrapper, ProfileDoctor, WrapperWorkingHours } from './styled';
import DoctorProfileCard from './DoctorProfileCard';
import DoctorBreadcrumbs from './DoctorBreadcrumbs';
import { Box } from '@mui/material';
import WorkingHours from '../../../components/WorkingHours';

const Doctor = () => {
  const [hideButton, setHideButton] = useState(true);

  return (
    <Box>
      <DoctorBreadcrumbs />
      <ProfileDoctor>
        <Wrapper>
          <DoctorProfileCard />
          <WrapperWorkingHours>
            <WorkingHours hideButton={hideButton} />
          </WrapperWorkingHours>
        </Wrapper>
      </ProfileDoctor>
    </Box>
  );
};

export default Doctor;
