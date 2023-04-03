import React, { FC } from 'react';
import { Container, Typography, Wrapper, AboutMoreInfo } from './styled';
import { IDoctor } from '../typesAndInterfaces';
import WorkingHours from '../WorkingHours';
import AboutDoctor from '../../../../components/AboutDoctor';

interface IDoctorAndIndex {
  doctor: IDoctor;
  index: number;
}

const Doctor: FC<IDoctorAndIndex> = ({ doctor }) => {
  return (
    <Container>
      <Wrapper>
        <AboutDoctor doctor={doctor} />
        <Typography>{doctor.information}</Typography>
        <AboutMoreInfo to='/doctor'>Більше про лікаря</AboutMoreInfo>
      </Wrapper>
      <WorkingHours />
    </Container>
  );
};

export default Doctor;
