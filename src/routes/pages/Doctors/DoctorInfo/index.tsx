import React, { FC } from 'react';
import { Container, Typography, Wrapper, AboutMoreInfo, WrapperWorkingHours } from './styled';
import WorkingHours from 'components/WorkingHours';
import AboutDoctor from 'components/AboutDoctor';
import { IDoctor } from '../typesAndInterfaces';

interface IDoctorAndIndex {
  doctor: IDoctor;
  index: number;
}

const DoctorInfo: FC<IDoctorAndIndex> = ({ doctor }) => {
  return (
    <Container>
      <Wrapper>
        <AboutDoctor doctor={doctor} />
        <Typography>{doctor.info.slice(0, 220)}...</Typography>
        <AboutMoreInfo to={`/doctors/${doctor.id}`}>Більше про лікаря</AboutMoreInfo>
      </Wrapper>
      <WrapperWorkingHours>
        <WorkingHours doctorId={doctor.id.toString()} />
      </WrapperWorkingHours>
    </Container>
  );
};

export default DoctorInfo;
