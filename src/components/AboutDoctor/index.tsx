import React, { FC } from 'react';
import { Doctor, Container, Direction, Img, PhotoDoctor } from './styled';
import NameAndRating from './NameAndRating';
import Details from './Details';
import { Box } from '@mui/material';
import { IDoctorProps } from 'routes/pages/Doctor/interfaces';

const AboutDoctor: FC<IDoctorProps> = ({ currentDoctor }) => {
  return (
    <Container>
      <Doctor>
        <PhotoDoctor>
          <Img
            src={currentDoctor.profile_image}
            alt={currentDoctor.last_name}
            title={currentDoctor.last_name}
          />
        </PhotoDoctor>
        <Box sx={{ maxWidth: '500px', width: '100%' }}>
          <NameAndRating currentDoctor={currentDoctor} />
          <Direction>{currentDoctor.specialization}</Direction>
          <Details currentDoctor={currentDoctor} />
        </Box>
      </Doctor>
    </Container>
  );
};

export default AboutDoctor;
