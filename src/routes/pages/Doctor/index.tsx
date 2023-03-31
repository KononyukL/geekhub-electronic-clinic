import React from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import { CurrentDoctor, Navigation, Wrapper } from './styled';
import DoctorProfileCard from './DoctorProfileCard';
import DoctorSchedule from './DoctorSchedule';
import Box from "@mui/material/Box";

const Doctor = () => {
  return (
    <Box>
      <Navigation>
        <Link to="/">Головна/</Link>
        <Link to="/doctors">Пошук лікаря/</Link>
        <CurrentDoctor>Андрущенко Ілона Макарівна</CurrentDoctor>
      </Navigation>
      <Container>
        <Wrapper>
          <DoctorProfileCard />
          <DoctorSchedule />
        </Wrapper>
      </Container>
    </Box>
  );
};

export default Doctor;
