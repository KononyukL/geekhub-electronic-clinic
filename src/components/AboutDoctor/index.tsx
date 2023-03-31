import React, { FC } from 'react';
import { Doctor, Container, Direction, Img, PhotoDoctor, Box } from './styled';
import NameAndRating from './NameAndRating';
import { IDoctor } from '../../routes/pages/Doctors/typesAndInterfaces';
import Details from './Details';

interface IDoctorProfileCard {
  doctor: IDoctor;
}

const AboutDoctor: FC<IDoctorProfileCard> = ({ doctor }) => {
  return (
    <Container>
      <Doctor>
        <PhotoDoctor>
          <Img src={doctor.photo} alt={doctor.lastName} />
        </PhotoDoctor>
        <Box>
          <NameAndRating doctor={doctor} />
          <Direction>{doctor.profession}</Direction>
          <Details doctor={doctor} />
        </Box>
      </Doctor>
    </Container>
  );
};

export default AboutDoctor;
