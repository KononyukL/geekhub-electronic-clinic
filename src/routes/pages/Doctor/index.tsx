import React from 'react';
import { Wrapper, ProfileDoctor, WrapperWorkingHours, Container } from './styled';
import DoctorProfileCard from './DoctorProfileCard';
import DoctorBreadcrumbs from './DoctorBreadcrumbs';
import WorkingHours from 'components/WorkingHours';

const Doctor = () => {
  return (
    <Container>
      <DoctorBreadcrumbs />
      <ProfileDoctor>
        <Wrapper>
          <DoctorProfileCard />
          <WrapperWorkingHours>
            <WorkingHours hideButton={true} />
          </WrapperWorkingHours>
        </Wrapper>
      </ProfileDoctor>
    </Container>
  );
};

export default Doctor;
