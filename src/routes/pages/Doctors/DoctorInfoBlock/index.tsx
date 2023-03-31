import React, { FC } from 'react';
import { Container, InfoDoctor, Wrapper } from './styled';
import { IDoctorAndIndex } from '../typesAndInterfaces';
import WorkingHours from '../WorkingHours';
import AboutDoctor from '../../../../components/AboutDoctor';

const Doctor: FC<IDoctorAndIndex> = ({ doctor }) => {
  return (
    <Container>
      <Wrapper>
        <AboutDoctor doctor={doctor} />
        <InfoDoctor>{doctor.information}</InfoDoctor>
      </Wrapper>
      <WorkingHours />
    </Container>
  );
};

export default Doctor;
