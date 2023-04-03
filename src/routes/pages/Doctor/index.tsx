import React from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import { Wrapper } from './styled';
import DoctorProfileCard from './DoctorProfileCard';
import DoctorSchedule from './DoctorSchedule';
import Box from "@mui/material/Box";

const Doctor = () => {
  return (
    <Box>
      <Box>
        <Link to="/">Головна/</Link>
        <Link to="/doctors">Пошук лікаря/</Link>
        <Link to="/doctor/">Андрущенко Ілона Макарівна</Link>
      </Box>
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
