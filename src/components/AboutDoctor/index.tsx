import React, { FC } from 'react';
import { Doctor, Container, Direction, Img, PhotoDoctor } from './styled';
import NameAndRating from './NameAndRating';
import { IDoctor } from 'routes/pages/Doctors/typesAndInterfaces';
import Details from './Details';
import { Box } from '@mui/material';

interface IDoctorProfileCard {
  doctor: IDoctor;
}

const AboutDoctor: FC<IDoctorProfileCard> = ({ doctor }) => {
  return (
    <Container>
      <Doctor>
        <PhotoDoctor>
          <Img src={doctor.profile_image} alt={doctor.last_name} title={doctor.last_name} />
        </PhotoDoctor>
        <Box sx={{ maxWidth: '500px', width: '100%' }}>
          <NameAndRating doctor={doctor} />
          <Direction>{doctor.specialization}</Direction>
          <Details doctor={doctor} />
        </Box>
      </Doctor>
    </Container>
  );
};

export default AboutDoctor;
