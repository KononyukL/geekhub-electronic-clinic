import React, { FC } from 'react';
import { Container, Wrapper, AboutDoctor, PhotoDoctor, Img, Direction, InfoDoctor } from './styled';
import { IDoctorAndIndex } from '../typesAndInterfaces';
import WorkingHours from '../WorkingHours';
import { Box } from '@mui/material';
import NameAndRating from './NameAndRating';
import Index from './Service';

const Doctor: FC<IDoctorAndIndex> = ({ doctor, index }) => {
  return (
    <Container key={index}>
      <Wrapper>
        <AboutDoctor>
          <PhotoDoctor>
            <Img src={doctor.photo} alt={doctor.lastName} />
          </PhotoDoctor>
          <Box>
            <NameAndRating doctor={doctor} />
            <Direction>{doctor.profession}</Direction>
            <Index doctor={doctor} />
          </Box>
        </AboutDoctor>
        <InfoDoctor>{doctor.information}</InfoDoctor>
      </Wrapper>
      <WorkingHours />
    </Container>
  );
};

export default Doctor;
