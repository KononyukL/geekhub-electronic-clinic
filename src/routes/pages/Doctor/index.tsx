import React, { useState } from 'react';
import { Wrapper, ProfileDoctor, WrapperWorkingHours, Container } from './styled';
import DoctorProfileCard from './DoctorProfileCard';
import DoctorBreadcrumbs from './DoctorBreadcrumbs';
import WorkingHours from 'components/WorkingHours';

const Doctor = () => {
  const [hideButton, setHideButton] = useState(true);

  return (
    <Container>
      <DoctorBreadcrumbs />
      <ProfileDoctor>
        <Wrapper>
          <DoctorProfileCard />
          <WrapperWorkingHours>
            <WorkingHours hideButton={hideButton} />
          </WrapperWorkingHours>
        </Wrapper>
      </ProfileDoctor>
    </Container>
  );
};

export default Doctor;
