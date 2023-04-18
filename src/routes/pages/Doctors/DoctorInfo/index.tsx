import React, { FC } from 'react';
import { Container, Typography, Wrapper, AboutMoreInfo, WrapperWorkingHours } from './styled';
import WorkingHours from 'components/WorkingHours';
import AboutDoctor from 'components/AboutDoctor';
import { IDoctorAndIndex } from '../interfaces';

const DoctorInfo: FC<IDoctorAndIndex> = ({ currentDoctor }) => {
  return (
    <Container>
      <Wrapper>
        <AboutDoctor currentDoctor={currentDoctor} />
        <Typography>{currentDoctor.info.slice(0, 220)}...</Typography>
        <AboutMoreInfo to={`/doctors/${currentDoctor.id}`}>Більше про лікаря</AboutMoreInfo>
      </Wrapper>
      <WrapperWorkingHours>
        <WorkingHours doctorId={currentDoctor.id.toString()} />
      </WrapperWorkingHours>
    </Container>
  );
};

export default DoctorInfo;
